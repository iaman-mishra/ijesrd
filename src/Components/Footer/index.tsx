import { Box, Divider } from "@mui/material";
import React from "react";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  return (
    <>
      <Divider />
      <Box component={"footer"} sx={style.section}>
        <NewsLetter />
        <FooterLinks />
        <FooterBottom />
      </Box>
    </>
  );
};

export default Footer;

const style = {
  section: {
    width: "100%",
    paddingX: "15px",
    maxWidth: "1140px",
    marginX: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background.default",
    paddingY: "4rem",
  },
} satisfies IStyle;
