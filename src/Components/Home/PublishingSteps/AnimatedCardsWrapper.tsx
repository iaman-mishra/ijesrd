"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const AnimatedCardsWrapper: React.FC<AnimatedCardsWrapperProps> = ({
  steps,
  header,
}) => {
  const sectionRef = useRef(null);
  const MotionBox = motion.create(Box);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressBarScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

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
            {steps.map((step, index) => (
              <AnimatedCard
                key={step.step}
                step={step}
                index={index}
                totalSteps={steps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface AnimatedCardProps {
  step: Step;
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  step,
  index,
  totalSteps,
  scrollYProgress,
}) => {
  const MotionBox = motion.create(Box);

  const startOffset = 0.1;
  const endOffset = 0.9;
  const totalRange = endOffset - startOffset;
  const stepRange = totalRange / totalSteps;

  const start = startOffset + index * stepRange;
  const end = start + stepRange * 0.8;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.5, 1]);
  const y = useTransform(scrollYProgress, [start, end], [100, 0]);
  const filter = useTransform(
    scrollYProgress,
    [start, end],
    ["blur(10px)", "blur(0px)"]
  );

  return (
    <MotionBox
      style={{
        opacity,
        scale,
        y,
        filter,
      }}
      sx={style.card}
    >
      <Box sx={style.stepIcon}>{step.icon}</Box>
      <Box sx={style.cardContent}>
        <Typography variant="h4" sx={style.stepTitle}>
          {step.title}
        </Typography>
        <Typography variant="subtitle2">{step.description}</Typography>
      </Box>
      <Typography sx={style.count} variant="caption">
        Step {step.step}
      </Typography>
    </MotionBox>
  );
};

const style: IStyle = {
  section: {
    width: "100%",
    paddingX: "15px",
    paddingY: { xs: "40px", md: "60px", xl: "80px" },
    marginX: "auto",
    maxWidth: { md: "720px", lg: "992px", xl: "1140px" },
    height: { xs: "auto", md: "250vh" },
  },
  stickyContainer: {
    position: { xs: "static", md: "sticky" },
    top: "15vh",
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
    height: 4,
    borderRadius: 20,
    transformOrigin: "left",
    zIndex: 0,
  },
  cardsContainer: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(4, 1fr)",
    },
    gap: "2rem",
    zIndex: 1,
  },
  card: {
    position: "relative",
    backgroundColor: "bg.main",
    borderRadius: "16px",
    padding: "2rem 1.5rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
    "&:hover": {
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    },
  },
  stepIcon: {
    width: "70px",
    height: "70px",
    backgroundColor: "secondary.100",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    border: "2px solid",
    borderColor: "secondary.main",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  stepTitle: {
    fontWeight: "500",
  },
  count: {
    position: "absolute",
    top: "-12px",
    right: "20px",
    backgroundColor: "secondary.main",
    color: "text.secondary",
    padding: "4px 16px",
    borderRadius: "20px",
    fontWeight: "500",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default AnimatedCardsWrapper;
