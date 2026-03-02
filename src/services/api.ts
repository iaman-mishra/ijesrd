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

    resendVerificationEmail: builder.mutation<ApiResponse, { email: string }>({
      query: (body) => ({
        url: "/user/send-verify",
        method: "POST",
        body,
      }),
    }),
    
    verify: builder.query<ApiResponse, {token: string} >({
      query: ({token}) => ({
        url: `/user/verify?token=${token}`,
        method: "GET",
      }),
    })
  }),
});

export const { useSignupMutation , useResendVerificationEmailMutation , useVerifyQuery} = api;
