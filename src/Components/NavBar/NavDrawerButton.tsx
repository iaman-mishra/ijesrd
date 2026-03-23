"use client";

import React, { useState } from "react";
import { routes } from "@/constants/routes";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import LinkButton from "../UI/LinkButton";

const NavDrawerButton: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();

  const handleToggleCollapse = (label: string) => {
    setOpenItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton onClick={toggleDrawer} sx={{ color: "text.primary" }}>
        <Menu size={22} />
      </IconButton>

      <Drawer
        anchor="left"
        data-lenis-prevent
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Box sx={style.drawerConatiner}>
          <Box sx={style.drawerHeader}>
            <IconButton onClick={toggleDrawer} sx={{ color: "text.primary" }}>
              <X size={22} />
            </IconButton>
          </Box>

          <Divider />

          <List sx={style.navList}>
            {routes.map((route) => {
              const hasChildren = route.children && route.children.length > 0;
              const isActive = pathname === route.href;

              if (hasChildren) {
                const isCollapseOpen = !!openItems[route.label];
                return (
                  <React.Fragment key={route.label}>
                    <ListItemButton
                      onClick={() => handleToggleCollapse(route.label)}
                    >
                      {route.icon && (
                        <ListItemIcon sx={style.listIcon}>
                          <route.icon size={20} />
                        </ListItemIcon>
                      )}
                      <ListItemText
                        primary={route.label}
                        slotProps={{
                          primary: {
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          },
                        }}
                      />
                      {isCollapseOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </ListItemButton>
                    <Collapse in={isCollapseOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {route.children?.map((child) => (
                          <ListItemButton
                            key={child.label}
                            component={Link}
                            href={child.href || "#"}
                            onClick={toggleDrawer}
                            sx={{
                              pl: 4,
                              "&:hover": { bgcolor: "action.hover" },
                              bgcolor:
                                pathname === child.href
                                  ? "action.selected"
                                  : "transparent",
                            }}
                          >
                            {child.icon && (
                              <ListItemIcon sx={style.listIcon}>
                                <child.icon size={20} />
                              </ListItemIcon>
                            )}
                            <ListItemText
                              primary={child.label}
                              slotProps={{
                                primary: {
                                  fontWeight:
                                    pathname === child.href ? 600 : 500,
                                  fontSize: "0.95rem",
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }

              return (
                <ListItemButton
                  key={route.label}
                  component={Link}
                  href={route.href || "/"}
                  onClick={toggleDrawer}
                  sx={{
                    bgcolor: isActive ? "action.selected" : "transparent",
                  }}
                >
                  {route.icon && (
                    <ListItemIcon sx={style.listIcon}>
                      <route.icon size={20} />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={route.label}
                    slotProps={{
                      primary: {
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "0.95rem",
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>

          <Divider />

          <Box sx={style.drawerFooter}>
            <LinkButton href="/settings" sx={{ color: "text.primary" }}>
              Settings
            </LinkButton>
            <ThemeSwitch />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

const style = {
  drawerConatiner: {
    width: 280,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    bgcolor: "background.paper",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    p: 2,
  },
  drawerFooter: {
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navList: {
    flex: 1,
    overflowY: "auto",
    px: 1,
    "& .MuiListItemButton-root": {
      borderRadius: 1.5,
      mb: 0.5,
    },
  },
  listIcon: { minWidth: 30, color: "text.primary" },
} satisfies IStyle;

export default NavDrawerButton;
