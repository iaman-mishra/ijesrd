"use client";
import React from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={style.main}>
      <Box sx={style.left}>
        <Typography variant="h2" fontWeight="700" gutterBottom>
          IJESRD
        </Typography>
        <Typography variant="h5">
          International Journal of Engineering Science Research and Development
        </Typography>
      </Box>
      <Box sx={style.right}>{children}</Box>
    </Box>
  );
};

export default AuthLayout;

const style = {
  main: {
    display: "flex",
    minHeight: "100vh",
    bgcolor: "background.default",
    overflow: "hidden",
    padding: 6,
  },
  left: {
    flex: 1,
    display: { xs: "none", md: "flex" },
    bgcolor: "primary.main",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: { xs: 1, md: "0 0 550px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: { xs: 3, sm: 6, md: 8 },
  },
} satisfies IStyle;
