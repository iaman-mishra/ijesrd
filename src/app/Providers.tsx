"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Theme from "@/Theme/Theme";
import ReactLenis from "lenis/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={Theme} defaultMode={"system"}>
        <CssBaseline />
        <ReactLenis root>{children}</ReactLenis>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
