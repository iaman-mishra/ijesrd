// import Header from "@/components/public/header";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LenisProvider>
      <Box component={"div"} sx={style.layout}>
        {/* <Header /> */}
        {children}
      </Box>
    </LenisProvider>
  );
};

export default layout;

const style: IStyle = {
  layout: {
    width: "100%",
    height: "100%",
    maxWidth: "1270px",
    bgcolor: "white",
    boxShadow: "0 0 15px 3px rgba(0, 0, 0, 0.20)",
    marginX: "auto",
  },
};
