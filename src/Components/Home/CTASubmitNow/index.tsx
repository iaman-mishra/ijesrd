import { Box, Button, Typography } from "@mui/material";
import { ArrowDownUp } from "lucide-react";
import React from "react";

import GraphicEllipse1 from "@/assets/png/EllipseGraphic1.png";
import GraphicEllipse2 from "@/assets/png/EllipseGraphic2.png";
import { FadeUp } from "@/Components/Motion/AnimatedWrapper";

const CTASubmitNow: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <Box sx={style.container}>
        <Box sx={style.textBox}>
          <FadeUp>
            <Typography sx={style.title}>
              Ready to Publish Your Research?
            </Typography>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Typography sx={style.description}>
              Submit your manuscript today and join the ranks of global
              engineering innovators.
            </Typography>
          </FadeUp>
        </Box>

        <Button
          variant="contained"
          sx={style.button}
          endIcon={<ArrowDownUp size={15} />}
        >
          Start Submission
        </Button>

        {/* Decorative Background Graphics */}
        <Box sx={style.graphic1} />
        <Box sx={style.graphic2} />
      </Box>
    </Box>
  );
};

const style = {
  section: {
    paddingX: { xs: "16px", sm: "24px" },
    paddingBottom: { xs: "64px", md: "96px" },
  },

  container: {
    padding: { xs: "40px", md: "80px" },
    backgroundColor: "primary.main",
    boxShadow: "0px 25px 50px -12px #00000040",
    borderRadius: "24px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    gap: "32px",
    position: "relative",
    overflow: "hidden",
  },

  textBox: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "16px", md: "24px" },
    color: "primary.contrastText",
    maxWidth: { xs: "auto", md: "517px" },
    textAlign: { xs: "center", md: "start" },
  },

  title: {
    fontSize: { xs: "30px", md: "48px" },
    lineHeight: { xs: "36px", md: "48px" },
    fontWeight: 800,
  },

  description: {
    fontSize: { xs: "14px", md: "18px" },
    lineHeight: { xs: "20px", md: "28px" },
  },

  button: {
    backgroundColor: "primary.contrastText",
    color: "primary.main",
    paddingY: { xs: "16px", md: "20px" },
    paddingX: "40px",
    fontWeight: 800,
    fontSize: { xs: "16px", md: "18px" },
    lineHeight: { xs: "24px", md: "28px" },
    height: "fit-content",
    minWidth: { xs: "auto", md: "fit-content" },
    marginY: "auto",
  },

  graphic1: {
    display: { xs: "none", md: "block" },
    position: "absolute",
    top: 0,
    right: 0,
    width: GraphicEllipse1.width,
    height: GraphicEllipse1.height,
    backgroundImage: `url(${GraphicEllipse1.src})`,
    backgroundRepeat: "no-repeat",
  },

  graphic2: {
    display: { xs: "none", md: "block" },
    position: "absolute",
    bottom: 0,
    left: 0,
    width: GraphicEllipse2.width,
    height: GraphicEllipse2.height,
    backgroundImage: `url(${GraphicEllipse2.src})`,
    backgroundRepeat: "no-repeat",
  },
};

export default CTASubmitNow;
