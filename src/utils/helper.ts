import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { UseFormSetError, Path, FieldValues } from "react-hook-form";

export function handleValidationError<T extends FieldValues>(
  status: number,
  data: ApiResponse,
  setError: UseFormSetError<T>
) {
  
  if (status !== 422 || !data) return;

  data.errors?.forEach((err) => {
    setError(err.field as Path<T>, {
      type: "server",
      message: err.message,
    });
  });
}


type VerifyErrorConfig = {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  footerText: string;
  footerHref: string;
  footerLinkText: string;
};

export const getVerifyErrorConfig = (status?: number): VerifyErrorConfig => {
  switch (status) {
    case 400:
      return {
        heading: "Invalid or Expired Verification Link",
        description:
          "This verification link is invalid or expired. Please sign up again to receive a new verification email.",
        buttonText: "Back to Login",
        buttonHref: "/login",
        footerText: "Need a new verification link?",
        footerHref: "/signup",
        footerLinkText: "Sign up again",
      };

    case 409:
      return {
        heading: "Email Already Verified",
        description:
          "Your email has already been verified. You can log in to your account.",
        buttonText: "Go to Login",
        buttonHref: "/login",
        footerText: "Don't have an account?",
        footerHref: "/signup",
        footerLinkText: "Sign up",
      };

    default:
      return {
        heading: "Verification Failed",
        description:
          "We couldn't verify your email. Please try again or sign up again.",
        buttonText: "Back to Login",
        buttonHref: "/login",
        footerText: "Need a new verification link?",
        footerHref: "/signup",
        footerLinkText: "Sign up again",
      };
  }
};
