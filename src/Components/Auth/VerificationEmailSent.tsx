"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Mail, ArrowRight, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { PageTransition } from "../Motion/AnimatedWrapper";
import { toast } from "sonner";
import AuthFooterLink from "./AuthFooterLink";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const VerificationEmailSent: React.FC = () => {
  const searchParams = useSearchParams();

  const userEmail = searchParams.get("email") || "";

  const handleResend = () => {
    toast.success("Verification email resent successfully!");
  };

  return (
    <PageTransition>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <Box sx={style.iconWrapper}>
          <Mail size={42} strokeWidth={1.5} />
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            sx={style.iconRing}
          />
        </Box>

        <Stack spacing={1.5}>
          <Typography variant="h3" sx={style.heading}>
            Check your inbox
          </Typography>
          <Typography variant="body1" sx={style.description}>
            We've sent a verification link to <br />
            <Box component="span" fontWeight="600" color="text.primary">
              {userEmail}
            </Box>
            . Please click the link to verify your account.
          </Typography>
        </Stack>

        <Stack spacing={2} width="100%">
          <Button
            fullWidth
            variant="contained"
            size="large"
            endIcon={<ArrowRight size={18} />}
            component={Link}
            href="/login"
          >
            Back to Login
          </Button>

          <Button
            fullWidth
            variant="outlined"
            size="large"
            startIcon={<RefreshCcw size={18} />}
            onClick={handleResend}
          >
            Resend Email
          </Button>
        </Stack>

        <AuthFooterLink
          text="Entered the wrong email?"
          linkText="Go back to register"
          href="/signup"
        />
      </Stack>
    </PageTransition>
  );
};

const style = {
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    position: "relative",
  },
  iconRing: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "28px",
    border: "2px solid",
    borderColor: "primary.main",
    zIndex: -1,
  },
  heading: {
    fontWeight: 600,
  },
  description: {
    color: "text.secondary",
    maxWidth: 380,
    mx: "auto",
    lineHeight: 1.6,
  },
} satisfies IStyle;

export default VerificationEmailSent;
