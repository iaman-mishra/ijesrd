"use client";

import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import { Search } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IRoute, routes } from "@/constants/routes";
import ThemeSwitch from "./ThemeSwitch";
import LinkButton from "../UI/LinkButton";
import NavMenuDesktop from "./NavMenuDesktop";
import NavDrawerButton from "./NavDrawerButton";

const NavBar: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<IRoute | null>(null);
  const [panelLeft, setPanelLeft] = useState(0);
  const [contentRoutes, setContentRoutes] = useState<IRoute["children"]>([]);
  const [contentVisible, setContentVisible] = useState(true);
  const navCenterRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const isOpenRef = useRef(false);

  const handleOpen = useCallback(
    (route: IRoute, triggerEl: HTMLElement) => {
      if (closeTimer.current) clearTimeout(closeTimer.current);

      const navRect = navCenterRef.current?.getBoundingClientRect();
      const btnRect = triggerEl.getBoundingClientRect();
      const left = navRect ? btnRect.left - navRect.left : 0;

      if (isOpenRef.current && activeRoute?.label !== route.label) {
        setPanelLeft(left);
        setContentVisible(false);
        setTimeout(() => {
          setContentRoutes(route.children);
          setContentVisible(true);
        }, 80);
      } else {
        setPanelLeft(left);
        setContentRoutes(route.children);
        setContentVisible(true);
      }

      setActiveRoute(route);
      isOpenRef.current = true;
    },
    [activeRoute],
  );

  const handleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveRoute(null);
      isOpenRef.current = false;
    }, 80);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const isOpen = !!activeRoute;

  return (
    <Box sx={style.section} component={"nav"}>
      <Box sx={style.container}>
        <NavDrawerButton />
        <Box sx={style.left}>
          <Typography variant="h5" sx={style.siteName}>
            IJESRD
          </Typography>
        </Box>

        <Box ref={navCenterRef} sx={style.center}>
          {routes.map((route, idx) => (
            <NavMenuDesktop
              key={idx}
              route={route}
              isActive={activeRoute?.label === route.label}
              onOpen={handleOpen}
              onClose={handleClose}
            />
          ))}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: panelLeft,
                  transformOrigin: "top left",
                  transition: "left 0.22s cubic-bezier(0.22, 1, 0.36, 1)",
                  zIndex: 100,
                }}
                onMouseEnter={cancelClose}
                onMouseLeave={handleClose}
              >
                <Paper elevation={0} sx={style.poperConatiner}>
                  <Box
                    sx={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible
                        ? "translateX(0)"
                        : "translateX(-4px)",
                      transition: "opacity 0.1s ease, transform 0.1s ease",
                    }}
                  >
                    {contentRoutes?.map((child, i) => (
                      <Box
                        key={i}
                        component="a"
                        href={child.href || "#"}
                        sx={style.popMenuItem}
                      >
                        {child.icon && (
                          <Box sx={style.popMenuIcon}>
                            <child.icon size={20} />
                          </Box>
                        )}
                        {child.label}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        <Box sx={style.right}>
          <IconButton sx={{ color: "text.primary" }}>
            <Search size={22} />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "inline-flex" }, gap: 1 }}>
            <ThemeSwitch />
            <LinkButton href="/login" variant="contained" sx={{ minWidth: 0 }}>
              Login
            </LinkButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const style = {
  section: {
    position: "sticky",
    top: 0,
    bgcolor: "background.paper",
    zIndex: 50,
    borderTop: "1px solid",
    borderBottom: "1px solid",
    borderColor: "divider",
  },
  container: {
    maxWidth: "1400px",
    display: "flex",
    alignItems: "center",
    padding: "1rem 15px",
    margin: "0 auto",
    justifyContent: "space-between",
  },
  left: { display: "flex", alignItems: "center" },
  center: {
    flex: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    gap: 2,
    position: "relative",
  },
  right: { display: "flex", gap: 1, alignItems: "center" },
  siteName: {
    fontWeight: 700,
    color: "primary.main",
    letterSpacing: 1,
  },
  poperConatiner: {
    minWidth: 230,
    borderRadius: 2.5,
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 8px 28px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.04)",
    p: 0.75,
    overflow: "hidden",
  },
  popMenuItem: {
    display: "flex",
    alignItems: "center",
    gap: 1.2,
    py: 0.85,
    px: 1.5,
    borderRadius: 1.5,
    color: "text.primary",
    textDecoration: "none",
    fontSize: "0.875rem",
    transition: "background 0.12s, transform 0.12s",
    "&:hover": {
      bgcolor: "action.hover",
      transform: "translateX(2px)",
    },
  },
  popMenuIcon: {
    color: "text.primary",
    display: "flex",
    fontSize: 15,
    opacity: 0.75,
  },
} satisfies IStyle;

export default NavBar;
