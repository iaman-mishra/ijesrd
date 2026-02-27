import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import { signupFormSchema } from "@/Schemas/forms.schemas";
import z from "zod";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["ME"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    signup: builder.mutation<ApiResponse<null>, SignupMutationData>({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignupMutation } = api;
