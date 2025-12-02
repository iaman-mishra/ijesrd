"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "motion/react";

const AnimatedCradsWrapper: React.FC<AnimatedCradsWrapperProps> = ({
  steps,
  header,
}) => {
  const sectionRef = useRef(null);

  const MotionBox = motion.create(Box);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressBarScale = useTransform(scrollYProgress, [0.2, 0.9], [0, 1]);

  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.15], [0.5, 1]);
  const card1Scale = useTransform(scrollYProgress, [0.1, 0.15], [0.8, 1]);

  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.35], [0.5, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.35], [0.8, 1]);

  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.55], [0.5, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.5, 0.55], [0.8, 1]);

  const card4Opacity = useTransform(scrollYProgress, [0.7, 0.75], [0.5, 1]);
  const card4Scale = useTransform(scrollYProgress, [0.7, 0.75], [0.8, 1]);

  const getCardAnimation = (index: number) => {
    switch (index) {
      case 0:
        return { opacity: card1Opacity, scale: card1Scale };
      case 1:
        return { opacity: card2Opacity, scale: card2Scale };
      case 2:
        return { opacity: card3Opacity, scale: card3Scale };
      case 3:
        return { opacity: card4Opacity, scale: card4Scale };
      default:
        return { opacity: card1Opacity, scale: card1Scale };
    }
  };

  return (
    <Box component={"section"} sx={style.section} ref={sectionRef}>
      <Box sx={style.stickyContainer}>
        {header}

        <Box sx={style.animationWrapper}>
          <MotionBox
            sx={style.progressLine}
            style={{
              scaleX: progressBarScale,
            }}
          />

          <Box sx={style.cardsContainer}>
            {steps.map((step, index) => {
              const animation = getCardAnimation(index);
              return (
                <MotionBox
                  key={step.step}
                  style={{
                    opacity: animation.opacity,
                    scale: animation.scale,
                  }}
                  sx={style.card}
                >
                  <Box sx={style.stepIcon}>{step.icon}</Box>
                  <Box sx={style.cardContent}>
                    <Typography variant="h4" sx={style.stepTitle}>
                      {step.title}
                    </Typography>
                    <Typography variant="subtitle2">
                      {step.description}
                    </Typography>
                  </Box>
                  <Typography sx={style.count} variant="caption">
                    Step {step.step}
                  </Typography>
                </MotionBox>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const style: IStyle = {
  section: {
    width: "100%",
    paddingX: "15px",
    paddingY: { xs: "40px", md: "60px", xl: "80px" },
    marginX: "auto",
    maxWidth: { md: "720px", lg: "992px", xl: "1140px" },
    height: { xs: "auto", md: "200vh" },
  },
  stickyContainer: {
    position: { xs: "static", md: "sticky" },
    top: "10vh",
    height: "auto",

    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  animationWrapper: {
    position: "relative",
    marginTop: "2rem",
  },
  progressLine: {
    display: {
      xs: "none",
      md: "block",
    },
    bgcolor: "secondary.main",
    position: "absolute",
    top: "50%",
    width: "100%",
    height: 5,
    borderRadius: 20,
    transformOrigin: "left",
  },
  cardsContainer: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(4, 1fr)",
    },
    gap: {
      xs: "2rem",
      md: "1.5rem",
    },
  },
  card: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "2rem 1.5rem 1.5rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    border: "1px solid #f0f0f0",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
    },
  },
  stepIcon: {
    width: "60px",
    height: "60px",
    backgroundColor: "secondary.100",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    margin: "0 auto 1rem",
    border: "2px solid",
    borderColor: "secondary.main",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  stepTitle: {
    fontWeight: "500",
  },
  count: {
    position: "absolute",
    top: "-10px",
    right: "12px",
    backgroundColor: "secondary.main",
    color: "text.secondary",
    padding: "4px 12px",
    borderRadius: "20px",
  },
};

export default AnimatedCradsWrapper;
