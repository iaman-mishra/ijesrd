import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={style.main}>
      <Box sx={style.left}>
        <Stack
          spacing={2}
          sx={{ position: "relative", zIndex: 1, maxWidth: 480 }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "white",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h4" fontWeight="800" color="primary">
              I
            </Typography>
          </Box>
          <Typography variant="h2" fontWeight="800">
            IJESRD
          </Typography>
          <Typography variant="h5" fontWeight="500" sx={{ opacity: 0.9 }}>
            International Journal of Engineering Science Research and
            Development
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.7, mt: 2 }}>
            Join our community of researchers and publish your work with
            confidence.
          </Typography>
        </Stack>
      </Box>

      <Box sx={style.right}>
        <Box sx={style.content}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;

const style = {
  main: {
    display: "flex",
    minHeight: "100vh",
    padding: { xs: 0, lg: 3 },
  },
  left: {
    flex: 1,
    position: "sticky",
    top: "24px",
    height: "calc(100vh - 48px)",
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
    color: "primary.contrastText",
    background:
      "linear-gradient(135deg, var(--mui-palette-primary-main) 0%, var(--mui-palette-primary-dark) 100%)",
  },
  right: {
    flex: { xs: 1, lg: "0 0 600px" },
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: 3, sm: 6, md: 8 },
    maxWidth: "550px",
    width: "100%",
    mx: "auto",
  },
} satisfies IStyle;
