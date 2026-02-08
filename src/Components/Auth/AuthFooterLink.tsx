"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface AuthFooterLinkProps {
  text: string;
  linkText: string;
  href: string;
}

const AuthFooterLink: React.FC<AuthFooterLinkProps> = ({
  text,
  linkText,
  href,
}) => {
  return (
    <Box textAlign="center">
      <Typography variant="body2" color="text.secondary">
        {text}{" "}
        <Box component={Link} href={href} sx={styles.link} color="primary.main">
          {linkText}
        </Box>
      </Typography>
    </Box>
  );
};

export default AuthFooterLink;

const styles = {
  link: {
    textDecoration: "none",
    fontWeight: 600,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};
