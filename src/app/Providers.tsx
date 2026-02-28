"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Theme from "@/Theme/Theme";
import ReactLenis from "lenis/react";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { updateToken } from "@/store/slices/authSlice";
import CustomToaster from "@/Components/Common/CustomToaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      store.dispatch(updateToken({ accessToken, refreshToken }));
    }
  }, []);

  return (
    <AppRouterCacheProvider>
      <Provider store={store}>
        <ThemeProvider theme={Theme} defaultMode={"system"}>
          <CssBaseline />
          <CustomToaster />
          <ReactLenis root>{children}</ReactLenis>
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}
