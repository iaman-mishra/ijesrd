import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={style.wrapper}>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © {currentYear} IJESRD. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link href="#" underline="hover" sx={style.bottomLink}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" sx={style.bottomLink}>
            Terms & Conditions
          </Link>
        </Stack>

        <Stack direction="row" spacing={1}>
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Instagram, href: "#" },
          ].map(({ Icon, href }, index) => (
            <IconButton
              key={index}
              href={href}
              sx={style.socialIcon}
              component={Link}
            >
              <Icon size={18} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const style = {
  wrapper: {
    paddingY: "1.5rem",
    borderTop: "1px solid",
    borderColor: "divider",
    marginTop: "2rem",
  },
  bottomLink: {
    color: "text.secondary",
    fontSize: "0.875rem",
    transition: "color 0.2s",
    fontWeight: 500,
    "&:hover": {
      color: "primary.main",
    },
  },
  socialIcon: {
    color: "text.secondary",
    transition: "all 0.3s ease",
    border: "1px solid",
    borderColor: "divider",
    "&:hover": {
      color: "#fff",
      background: "var(--mui-palette-primary-main)",
      borderColor: "var(--mui-palette-primary-main)",
      transform: "translateY(-3px)",
      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
    },
  },
} satisfies IStyle;

export default FooterBottom;
