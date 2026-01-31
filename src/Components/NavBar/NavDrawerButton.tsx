"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { ChevronLeft, CircleChevronLeft, Menu } from "lucide-react";
import NavigationTab from "../Common/NavigationTab";

const NavDrawerButton: React.FC<INavDrawerButton> = ({ routes }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        aria-label="open navigation drawer"
        sx={{
          display: {
            xs: "inline-flex",
            md: "none",
          },
          transform: drawerOpen ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform 0.5s ease",
        }}
        onClick={() => setDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ minWidth: "250px", padding: "1rem" }}>
          <Box sx={{ textAlign: "end", marginBottom: "1rem" }}>
            <IconButton
              aria-label="close navigation drawer"
              onClick={() => setDrawerOpen(false)}
            >
              <ChevronLeft />
            </IconButton>
          </Box>
          <NavigationTab
            orientation={"vertical"}
            routes={routes}
            showIcon={true}
            isCentered={false}
            style={style.navMobile}
          />
        </Box>
      </Drawer>
    </>
  );
};

const style: IStyle = {
  navMobile: {
    "& .MuiTab-root": {
      fontSize: "1rem",
      textAlign: "start",
      minHeight: "48px",
      borderRadius: "8px",
      justifyContent: "start",
      maxWidth: "100%",
      padding: "8px 16px",
      textTransform: "none",
      fontWeight: 500,
      transition: "all 0.2s ease",
      color: "text.primary",
      margin: "2px 0",

      "&:hover": {
        backgroundColor: "action.hover",
        color: "primary.main",
      },

      "&.Mui-selected": {
        color: "primary.main",
        backgroundColor: "action.selected",
        fontWeight: 600,
      },

      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: "primary.main",
        outlineOffset: "2px",
      },
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
};

export default NavDrawerButton;
