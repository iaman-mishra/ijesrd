"use client";

import * as React from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { motion } from "framer-motion";

type MotionBoxProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export const MotionBox: React.FC<MotionBoxProps> = ({ children, sx }) => {
  const MotionBox = motion.create(Box);
  return <MotionBox sx={sx}>{children}</MotionBox>;
};
