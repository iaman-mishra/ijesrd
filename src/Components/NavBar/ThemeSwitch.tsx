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
    light: <Sun />,
    dark: <Moon />,
    system: <Monitor />,
  }[mode];

  const label = {
    light: "Light mode",
    dark: "Dark mode",
    system: "System Default",
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
