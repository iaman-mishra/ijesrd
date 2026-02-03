"use client";
import React from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      {/* Left Decoration Side */}
      {!isMobile && (
        <Box
          component={motion.div}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            flex: 1,
            position: "relative",
            bgcolor: "primary.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
            overflow: "hidden",
            color: "white",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 40%), radial-gradient(circle at bottom left, rgba(255,255,255,0.2), transparent 40%)",
              zIndex: 1,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "140%",
              height: "140%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              background:
                "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%)",
              zIndex: 0,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography variant="h2" fontWeight="700" gutterBottom>
                IJESRD
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 500 }}>
                International Journal of Engineering Science Research and
                Development
              </Typography>
            </motion.div>

            <Box
              sx={{
                mt: 8,
                display: "flex",
                gap: 2,
                justifyContent: "center",
                opacity: 0.7,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "white",
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "white",
                  opacity: 0.5,
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "white",
                  opacity: 0.5,
                }}
              />
            </Box>
          </Box>
        </Box>
      )}

      {/* Right Content Side */}
      <Box
        sx={{
          flex: { xs: 1, md: "0 0 550px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 3, sm: 6, md: 8 },
          bgcolor: "background.paper",
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: 450, width: "100%", mx: "auto" }}>
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
