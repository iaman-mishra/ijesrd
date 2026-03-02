"use client";
import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const PulsatingIcon = ({
  icon: Icon,
  color = "primary.main",
  size = 56,
}: {
  icon: React.ElementType;
  color?: string;
  size?: number;
}) => {
  const iconColor = `var(--mui-palette-${color.split(".")[0]}-main)`;

  return (
    <Box sx={style.iconContainer}>
      <Box
        component={motion.div}
        sx={{
          ...style.iconBg,
          bgcolor: color,
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.15, 0.05, 0.15],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Icon size={size} color={iconColor} />
    </Box>
  );
};

const style = {
  iconContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBg: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    position: "absolute",
  },
} satisfies IStyle;

export default PulsatingIcon;
