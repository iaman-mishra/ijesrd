import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
import { Mail, Send } from "lucide-react";
import React from "react";
import { FadeUp } from "../Motion/AnimatedWrapper";
import NewsLetter from "./NewsLetter";

const Footer: React.FC = () => {
  return (
    <>
      <Divider />
      <Box component={"footer"} sx={style.section}>
        <FadeUp>
          <NewsLetter />
        </FadeUp>
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
