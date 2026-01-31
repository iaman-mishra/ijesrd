import { Box, Link, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={style.wrapper}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} IJESRD. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link
            href="#"
            color="text.secondary"
            underline="hover"
            variant="body2"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            color="text.secondary"
            underline="hover"
            variant="body2"
          >
            Terms & Conditions
          </Link>
        </Stack>

        <Stack direction="row" spacing={2} sx={style.socialIcons}>
          <Link href="#" color="inherit">
            <Facebook size={20} />
          </Link>
          <Link href="#" color="inherit">
            <Twitter size={20} />
          </Link>
          <Link href="#" color="inherit">
            <Linkedin size={20} />
          </Link>
          <Link href="#" color="inherit">
            <Instagram size={20} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

const style = {
  wrapper: {
    paddingY: "2rem",
    borderTop: "1px solid",
    borderColor: "divider",
  },
  socialIcons: {
    "& a": {
      transition: "color 0.2s",
      "&:hover": {
        color: "primary.main",
      },
    },
  },
} satisfies IStyle;

export default FooterBottom;
