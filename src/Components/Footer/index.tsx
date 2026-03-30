import { Box } from "@mui/material";
import React from "react";

import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  return (
    <Box component={"footer"} sx={style.section}>
      <Box sx={style.container}>
        <FooterLinks />
        <FooterBottom />
      </Box>
    </Box>
  );
};

export default Footer;

const style = {
  section: {
    backgroundColor: "background.default",
    pt: "96px",
    borderTop: "1px solid",
    borderColor: "divider",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "80px",
    px: { xs: "16px", sm: "24px" },
  },
} satisfies IStyle;
