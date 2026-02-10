import { SxProps, Theme } from "@mui/material/styles";

declare global {
  interface IRoute {
    label: string;
    href: string;
    icon?: React.JSX.Element;
  }

  type IStyle = Record<string, SxProps<Theme>>;

  type SocialProvider = "google" | "linkedin";
  
}

export {};
