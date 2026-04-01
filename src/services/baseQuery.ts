import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/store";
import { logoutUser, updateToken } from "@/store/slices/authSlice";
import { toast } from "sonner";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, store, extraOptions) => {
  let result = await baseQuery(args, store, extraOptions);

  const authState = (store.getState() as RootState).auth;

  if (result.error && result.error.status === 401) {
    if (!authState.accessToken || !authState.refreshToken) return result;

    const refreshResult = await baseQuery(
      {
        url: "/users/refresh-token",
        method: "POST",
        body: { refreshToken: authState.refreshToken },
      },
      store,
      extraOptions,
    );

    if (refreshResult.data) {
      const refreshData = refreshResult.data as { accessToken: string; refreshToken: string };
      store.dispatch(
        updateToken({
          accessToken: refreshData.accessToken,
          refreshToken: refreshData.refreshToken,
        }),
      );

      result = await baseQuery(args, store, extraOptions);
    } else {
      store.dispatch(logoutUser());
    }
  }


  if (result.error) {
    const status = result.error.status;

    if (status === 500) {
      toast.error("Something went wrong. Please try again later.");
    }

    else if (status === "FETCH_ERROR") {
      toast.error("Network error. Check your connection.");
    }

    else if (status === "PARSING_ERROR") {
      toast.error("Invalid server response.");
    }

    else if (status === "TIMEOUT_ERROR") {
      toast.error("Server is taking too long to respond.");
    }

    else if (status === 403) {
      toast.error("You don’t have permission to perform this action.");
    }
  }
  return result;
};
