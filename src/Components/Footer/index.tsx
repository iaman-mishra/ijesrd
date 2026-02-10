import { Box } from "@mui/material";
import React from "react";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  return (
    <Box component={"footer"} sx={style.section}>
      <Box sx={style.container}>
        <NewsLetter />
        <FooterLinks />
        <FooterBottom />
      </Box>
    </Box>
  );
};

export default Footer;

const style = {
  section: {
    width: "100%",
    backgroundColor: "background.default",
    pt: "3rem",
    borderTop: "1px solid",
    borderColor: "divider",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    maxWidth: "1140px",
    margin: "0 auto",
    px: "15px",
  },
} satisfies IStyle;
