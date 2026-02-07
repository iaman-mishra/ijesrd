import React from "react";
import { Box, Typography } from "@mui/material";

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
    padding: { xs: 3, sm: 4 },
  },
  left: {
    flex: 1,
    display: { xs: "none", md: "flex" },
    bgcolor: "primary.main",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "primary.contrastText",
  },
  right: {
    flex: { xs: 1, lg: "0 0 550px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { md: 6 },
  },
} satisfies IStyle;
