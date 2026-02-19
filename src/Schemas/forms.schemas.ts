import { z } from "zod";
import {
  emailField,
  nameField,
  passwordField,
  termsFields,
} from "./fields.schema";

export const newsletterSchema = z.object({
  email: emailField,
});

export const signupFormSchema = z
  .object({
    email: emailField,
    firstName: nameField,
    lastName: nameField,
    password: passwordField,
    confirmPassword: passwordField,
    terms: termsFields,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
