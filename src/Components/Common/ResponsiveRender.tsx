"use client";

import React from "react";
import { useMediaQuery, useTheme, Breakpoint } from "@mui/material";

interface ResponsiveRenderProps {
  ChildA: React.ReactNode;
  ChildB: React.ReactNode;
  breakpoint?: Breakpoint | number;
  comparison?: "up" | "down" | "only";
}

const ResponsiveRender: React.FC<ResponsiveRenderProps> = ({
  ChildA,
  ChildB,
  breakpoint = "md",
  comparison = "down",
}) => {
  const theme = useTheme();

  const query =
    typeof breakpoint === "number"
      ? comparison === "down"
        ? `(max-width:${breakpoint}px)`
        : `(min-width:${breakpoint}px)`
      : theme.breakpoints[comparison](breakpoint);

  const matches = useMediaQuery(query);

  return <>{matches ? ChildA : ChildB}</>;
};

export default ResponsiveRender;
