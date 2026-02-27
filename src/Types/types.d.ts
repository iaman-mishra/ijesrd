import { SxProps, Theme } from "@mui/material/styles";

declare global {
  interface ValidationError {
    field: string;
    message: string;
  }

  interface ApiResponse<T> {
    sucess: boolean;
    message: string;
    data: T | null;
    error: string | ValidationError[] | null;
  }

  interface AuthTokens {
    accessToken: string;
    refreshToken: string;
  }

  interface IRoute {
    label: string;
    href: string;
    icon?: React.JSX.Element;
  }

  type IStyle = Record<string, SxProps<Theme>>;

  type SocialProvider = "google" | "linkedin";

  interface SignupMutationData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }
}

export {};
