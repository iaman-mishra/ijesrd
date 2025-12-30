"use client";

import { Box, BoxProps, SxProps, Theme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export const SpringUp: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay,
      },
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const FadeUp: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
