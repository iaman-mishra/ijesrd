import { z } from "zod";

export const emailField = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Invalid email address");

export const nameField = z
  .string()
  .trim()
  .min(1, "This field is required")
  .max(50, "Must be less than 50 characters");

export const passwordField = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must contain uppercase, lowercase, number, and special character",
  );

export const termsFields = z.boolean().refine((data) => data === true, {
  message: "You must agree to the terms and conditions",
});
