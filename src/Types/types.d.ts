import { SxProps, Theme } from "@mui/material/styles";

declare global {
  interface IRoute {
    label: string;
    href: string;
    icon?: React.JSX.Element;
  }

  type IStyle = Record<string, SxProps<Theme>>;

  type SocialProvider = "google" | "linkedin";

  interface ApiResponse<T> {
    data: T;
    message: string;
    sucess: boolean;
  }

  interface AuthTokens {
    accessToken: string;
    refreshToken: string;
  }
}

export {};
