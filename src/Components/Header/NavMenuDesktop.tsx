"use client";
import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import LinkButton from "../UI/LinkButton";
import { IRoute } from "@/constants/routes";

interface NavMenuDesktopProps {
  route: IRoute;
  isActive: boolean;
  onOpen: (route: IRoute, el: HTMLElement) => void;
  onClose: () => void;
}

const NavMenuDesktop: React.FC<NavMenuDesktopProps> = ({
  route,
  isActive,
  onOpen,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  if (route.children) {
    return (
      <Box
        ref={ref}
        onMouseEnter={() => ref.current && onOpen(route, ref.current)}
        onMouseLeave={onClose}
      >
        <Button
          disableRipple
          sx={{
            color: isActive ? "primary.main" : "text.secondary",
            minWidth: 0,
            transition: "color 0.15s",
            fontSize: "14px",
            lineHeight: "20px",
            "&:hover": { bgcolor: "transparent", color: "primary.main" },
          }}
        >
          {route.label}
        </Button>
      </Box>
    );
  }

  return (
    <LinkButton
      href={route.href || "#"}
      sx={{
        color: "text.secondary",
        minWidth: 0,
        fontSize: "14px",
        lineHeight: "20px",
        "&:hover": { bgcolor: "transparent", color: "primary.main" },
      }}
    >
      {route.label}
    </LinkButton>
  );
};

export default NavMenuDesktop;
