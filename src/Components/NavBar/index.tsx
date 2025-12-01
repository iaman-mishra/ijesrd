import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Search } from "lucide-react";
import React from "react";
import NavigationTab from "../common/NavigationTab";
import NavDrawerButton from "./NavDrawerButton";
import { routes } from "@/constants/routes";

const NavBar: React.FC = () => {
  return (
    <Box component={"nav"} sx={style.section}>
      <Divider />
      <Box sx={style.container}>
        <NavDrawerButton routes={routes} />
        <Typography>ILLAR</Typography>
        <NavigationTab
          orientation={"horizontal"}
          routes={routes}
          isCentered={true}
          style={style.navDesktop}
        />

        <Button
          variant="contained"
          sx={{ display: { xs: "none", md: "inline-flex" } }}
        >
          Login
        </Button>

        <IconButton
          aria-label="open search page"
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <Search />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
};

const style: IStyle = {
  section: {
    position: "sticky",
    top: 0,
    bgcolor: "bg.main",
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
  navDesktop: {
    display: { xs: "none", md: "flex" },
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
