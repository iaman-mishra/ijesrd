"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { PageTransition } from "../Motion/AnimatedWrapper";
import AuthFooterLink from "./AuthFooterLink";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PulsatingIcon from "./PulsatingIcon";

const VerificationEmailSent: React.FC = () => {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email") || "";

  return (
    <PageTransition>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <PulsatingIcon icon={Mail} />
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