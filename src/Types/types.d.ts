import { SxProps, Theme } from "@mui/material/styles";

declare global {
  interface ValidationError {
    field: string;
    message: string;
  }

  interface ApiResponse<T = null> {
    success: boolean;
    message: string;
    data: T | null;
    errors: ValidationError[] | null;
  }

  interface AuthTokens {
    accessToken: string;
    refreshToken: string;
  }

  type IStyle = Record<string, SxProps<Theme>>;

  type SocialProvider = "google" | "linkedin";
}

export {};
