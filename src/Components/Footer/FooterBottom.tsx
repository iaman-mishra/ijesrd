import { footerBottomLinks, socialLinks } from "@/constants/data";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={style.section}>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        © {currentYear} IJESRD. All rights reserved.
      </Typography>

      <Stack direction="row" spacing={3}>
        {footerBottomLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{ textDecoration: "none" }}
          >
            <Typography sx={style.bottomLink}>{item.label}</Typography>
          </Link>
        ))}
      </Stack>

      <Stack direction="row" spacing={1}>
        {socialLinks.map((item) => (
          <IconButton
            key={item.label}
            sx={style.socialIcon}
            component={"a"}
            href={item.href}
            target="_blank"
          >
            <item.icon size={18} />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
};

const style = {
  section: {
    paddingY: "1.5rem",
    borderTop: "1px solid",
    borderColor: "divider",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { xs: "column-reverse", md: "row" },
    gap: "1rem",
  },
  bottomLink: {
    color: "var(--mui-palette-text-secondary)",
    textDecoration: "none",
    fontSize: "0.875rem",
    transition: "color 0.2s",
    fontWeight: 500,
    "&:hover": {
      color: "var(--mui-palette-primary-main)",
    },
  },
  socialIcon: {
    color: "text.secondary",
    transition: "all 0.3s ease",
    border: "1px solid",
    borderColor: "divider",
    "&:hover": {
      color: "var(--mui-palette-primary-contrastText)",
      background: "var(--mui-palette-primary-main)",
      borderColor: "var(--mui-palette-primary-main)",
      transform: "translateY(-3px)",
      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
    },
  },
} satisfies IStyle;

export default FooterBottom;
