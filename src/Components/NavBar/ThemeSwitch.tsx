"use client";
import React from "react";
import { IconButton, Tooltip, useColorScheme } from "@mui/material";
import { Sun, Moon, Monitor } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Mode = "light" | "dark" | "system";

const iconMap: Record<Mode, React.ReactNode> = {
  light: <Sun />,
  dark: <Moon />,
  system: <Monitor />,
};

const labelMap: Record<Mode, string> = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System Default",
};

const MotionSpan = motion.span;

const ThemeSwitch: React.FC = () => {
  const { mode = "system", setMode } = useColorScheme();

  const handleToggle = () => {
    const order: Mode[] = ["system", "light", "dark"];
    setMode(order[(order.indexOf(mode) + 1) % order.length]);
  };

  return (
    <Tooltip title={labelMap[mode]}>
      <IconButton onClick={handleToggle} color="inherit">
        <AnimatePresence mode="wait" initial={false}>
          <MotionSpan
            key={mode}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ display: "flex" }}
          >
            {iconMap[mode]}
          </MotionSpan>
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;
