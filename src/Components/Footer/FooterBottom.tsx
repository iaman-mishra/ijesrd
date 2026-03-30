import { Box, Typography } from "@mui/material";
import React from "react";

const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={style.section}>
      <Typography sx={style.copyrightText}>
        © {currentYear} International Journal of Engineering Science & Research
        Development (IJESRD). All Rights Reserved.
      </Typography>
    </Box>
  );
};

const style = {
  section: {
    paddingY: "32px",
    borderTop: "1px solid",
    borderColor: "divider",
  },
  copyrightText: {
    color: "text.secondary",
    textAlign: "center",
    fontSize: { xs: "9px", md: "12px" },
    lineHeight: { xs: "14.63px", md: "19.5px" },
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
