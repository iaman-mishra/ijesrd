import { Box, Button, Divider, IconButton } from "@mui/material";
import { Search } from "lucide-react";
import React from "react";
import NavigationTab from "../Common/NavigationTab";
import NavDrawerButton from "./NavDrawerButton";
import { routes } from "@/constants/routes";
import ThemeSwitch from "./ThemeSwitch";
import ResponsiveRender from "../Common/ResponsiveRender";

const NavBar: React.FC = () => {
  return (
    <Box component={"nav"} sx={style.section}>
      <Divider />
      <Box sx={style.container}>
        <ResponsiveRender
          ChildA={<NavDrawerButton routes={routes} />}
          ChildB={
            <NavigationTab
              orientation={"horizontal"}
              routes={routes}
              isCentered={true}
              style={style.navDesktop}
            />
          }
        />
        <Box sx={style.loginContainer}>
          <ThemeSwitch />
          <Button
            variant="contained"
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Login
          </Button>
          <IconButton aria-label="open search page">
            <Search />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

const style: IStyle = {
  section: {
    position: "sticky",
    top: 0,
    bgcolor: "background.default",
    zIndex: 10,
    width: "100%",
  },
  container: {
    paddingX: "15px",
    marginX: "auto",
    width: "100%",
    maxWidth: "1140px",
    paddingY: "1rem",
    display: "flex",
    gap: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginContainer: {
    display: "flex",
    gap: 2,
    alignItems: "center",
  },
  navDesktop: {
    minHeight: 0,
    justifyContent: "space-between",
    "& .MuiTab-root": {
      borderRadius: "8px",
      minWidth: "auto",
      minHeight: "32px",
      padding: "6px 12px",
      textTransform: "none",
      fontWeight: 500,
      transition: "all 0.2s ease",
      color: "text.primary",
      fontSize: "1rem",

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
  },
};

export default NavBar;
