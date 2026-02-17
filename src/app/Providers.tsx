"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Theme from "@/Theme/Theme";
import ReactLenis from "lenis/react";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <Provider store={store}>
        <ThemeProvider theme={Theme} defaultMode={"system"}>
          <CssBaseline />
          <ReactLenis root>{children}</ReactLenis>
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}
