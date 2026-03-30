import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";

import HeroBg from "@/assets/png/HeroBG.png";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <Box sx={style.container}>
        <Chip
          label="Official Peer-Reviewed Publication"
          sx={style.chip}
          color="primary"
          variant="outlined"
        />

        <Typography sx={style.heading}>
          {"Advancing the\n Frontiers of\n"}{" "}
          <Box component={"span"} sx={style.span}>
            {"Engineering &\n Systems "}
          </Box>
          {"Research"}
        </Typography>

        <Typography sx={style.description}>
          A peer-reviewed, open-access journal dedicated to fundamental
          engineering principles and cutting-edge digital systems. Empowering
          researchers worldwide since 2012.
        </Typography>

        <Box sx={style.buttonsBox}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight size={15} />}
          >
            Submit Manuscript
          </Button>
          <Button variant="outlined" size="large">
            Browse Archive
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const style = {
  section: {
    position: "relative",
    height: { xs: "fit-content", md: "100vh" },
    paddingX: { xs: "16px", sm: "24px" },
    paddingTop: { xs: "40px", md: "0px" },
    paddingBottom: { xs: "64px", md: "0px" },
    overflow: "hidden",
    background: `url(${HeroBg.src}) center/cover no-repeat`,
    display: "flex",
    alignItems: "center",
  },

  chip: {
    maxWidth: "fit-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "768px",
    position: "relative",
    gap: "24px",
  },

  heading: {
    whiteSpace: "pre-line",
    fontSize: { xs: "36px", md: "72px" },
    fontWeight: 800,
    color: "text.primary",
    lineHeight: { xs: "45px", md: "72px" },
  },
  span: {
    color: "primary.main",
  },
  description: {
    maxWidth: "672px",
    fontSize: { xs: "16px", md: "20px" },
    fontWeight: 300,
    lineHeight: { xs: "26px", md: "28px" },
    color: "text.disabled",
  },
  buttonsBox: {
    paddingTop: "24px",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    gap: "16px",
  },
  button: {
    paddingX: "32px",
    paddingY: "17px",
    fontSize: "16px",
    fontWeight: 600,
  },
} satisfies IStyle;

export default Hero;
