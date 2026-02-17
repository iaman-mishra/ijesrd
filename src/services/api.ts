import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["ME"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // me: builder.query<ApiResponse<User>, void>({
    //   query: () => `/users/me`,
    //   providesTags: ["ME"],
    // }),
    // login: builder.mutation<
    //   ApiResponse<{ accessToken: string; refreshToken: string }>,
    //   { email: string; password: string }
    // >({
    //   query: (body) => {
    //     return { url: `/users/login`, method: "POST", body };
    //   },
    // }),
  }),
});

export const {} = api;
