import Box from "@mui/material/Box";
import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import { ArrowRight } from "lucide-react";
import HeroLottie from "./HeroLottie";
import { BlurIn, ScaleX, FadeUp, SpringUp } from "../../Motion/AnimatedWrapper";

const Hero: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <Box sx={style.textContent}>
        <BlurIn>
          <Typography sx={style.title} variant="h1" component={"h1"}>
            {"We Welcome Latest\n Research Articles in\n Field of Science"}
          </Typography>
        </BlurIn>

        <ScaleX delay={0.2}>
          <Box sx={style.underline} />
        </ScaleX>

        <FadeUp delay={0.4}>
          <Typography
            variant={"subtitle1"}
            sx={style.description}
            component={"p"}
          >
            Publish your groundbreaking research with us and join a community of
            leading scientists, researchers, and academics. Our peer-reviewed
          </Typography>
        </FadeUp>

        <FadeUp delay={0.6}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={style.buttonGroup}
          >
            <Button variant="contained" size="large" endIcon={<ArrowRight />}>
              Submit Article
            </Button>
            <Button variant="outlined" size="large">
              Browse Journals
            </Button>
          </Stack>
        </FadeUp>
      </Box>

      <SpringUp delay={0.4}>
        <Box sx={style.lottie}>
          <HeroLottie />
        </Box>
      </SpringUp>
    </Box>
  );
};

const style: IStyle = {
  section: {
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      lg: "row",
    },
    justifyContent: "space-between",
    width: "100%",
    gap: {
      xs: "3rem",
      lg: "4rem",
      xl: "5rem",
    },
    paddingY: {
      xs: "40px",
      md: "60px",
      xl: "80px",
    },
    maxWidth: {
      md: "720px",
      lg: "992px",
      xl: "1140px",
    },
    paddingX: "15px",
    marginX: "auto",
    minHeight: {
      xs: "auto",
      lg: "600px",
    },
  },
  textContent: {
    flex: 1,
  },
  title: {
    whiteSpace: {
      xs: "none",
      lg: "pre-line",
    },
    textAlign: {
      xs: "center",
      lg: "start",
    },
    marginBottom: "1.5rem",
  },
  underline: {
    width: "80px",
    height: "5px",
    bgcolor: "primary.main",
    borderRadius: "1rem",
    marginTop: "1rem",
    marginBottom: "1.5rem",
    marginX: {
      xs: "auto",
      lg: 0,
    },
  },
  description: {
    marginBottom: "2.5rem",
    maxWidth: "600px",
    textAlign: {
      xs: "center",
      lg: "start",
    },
    marginX: {
      xs: "auto",
      lg: 0,
    },
  },
  buttonGroup: {
    marginBottom: {
      xs: "2.5rem",
      md: "3rem",
    },
    justifyContent: {
      xs: "center",
      lg: "start",
    },
    alignItems: "center",
  },
  lottie: {
    flex: 1,
  },
};

export default Hero;
