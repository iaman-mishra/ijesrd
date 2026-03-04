import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["ME"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    signup: builder.mutation<ApiResponse, SignupMutationData>({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
    }),    
    verify: builder.query<ApiResponse, {token: string} >({
      query: ({token}) => ({
        url: `/user/verify?token=${token}`,
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    })
  }),
});

export const { useSignupMutation , useVerifyQuery} = api;
