"use client";

import { Toaster } from "sonner";
import { useColorScheme } from "@mui/material/styles";

const CustomToaster = () => {
  const { mode } = useColorScheme();

  return (
    <Toaster
      theme={mode}
      richColors
      closeButton
      position="top-center"
      toastOptions={{
        style: {
          borderRadius: "12px",
          fontFamily: "var(--font-quicksand)",
        },
      }}
    />
  );
};

export default CustomToaster;
