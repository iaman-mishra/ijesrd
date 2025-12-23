import { Box, Divider } from "@mui/material";
import React, { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LenisProvider>
      <Box sx={{ bgcolor: "background.body" }}>
        <Box component={"div"} sx={style.layout}>
          <Header />
          <NavBar />
          {children}
        </Box>
      </Box>
    </LenisProvider>
  );
};

export default layout;

const style: IStyle = {
  layout: {
    width: "100%",
    maxWidth: "1270px",
    boxShadow: 10,
    marginX: "auto",
    bgcolor: "background.default",
  },
};
