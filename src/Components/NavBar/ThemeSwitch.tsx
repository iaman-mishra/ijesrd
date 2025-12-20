"use client";
import React from "react";
import { IconButton, Tooltip, useColorScheme } from "@mui/material";
import { Sun, Moon, Monitor } from "lucide-react";

type Mode = "light" | "dark" | "system";

const ThemeSwitch: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleToggle = () => {
    const order: Mode[] = ["system", "light", "dark"];
    const next = order[(order.indexOf(mode) + 1) % order.length];
    setMode(next);
  };

  const icon = {
    light: <Sun size={20} />,
    dark: <Moon size={20} />,
    system: <Monitor size={20} />,
  }[mode];

  const label = {
    light: "Light mode",
    dark: "Dark mode",
    system: "System mode",
  }[mode];

  return (
    <Tooltip title={label}>
      <IconButton onClick={handleToggle} color="inherit">
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;