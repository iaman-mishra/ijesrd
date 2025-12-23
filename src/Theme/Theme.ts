import { createTheme } from "@mui/material/styles";
import { m } from "motion/react";

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1976d2",
          light: "#42a5f5",
          dark: "#1565c0",
          contrastText: "#fff",
        },
        secondary: {
          main: "#ff8966",
        },
        text: {
          primary: "#000000de",
          secondary: "#00000099",
          disabled: "#00000061",
        },
        background: {
          paper: "#fff",
          default: "#fff",
          body: "#fff",
        },
      },
    },
    dark: {
      palette: {
        background: {
          paper: "#121212",
          default: "#121212",
          body: "#000",
        },
      },
    },
  },

  typography: {
    fontFamily: "var(--font-quicksand)",
    h1: {
      fontSize: "2rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "2.625rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.25rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "0.5rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "0.75rem",
      },
    },
    subtitle1: {
      fontSize: "1.1rem",
      "@media (min-width:992px)": {
        fontSize: "1.375rem",
      },
    },
    subtitle2: {
      fontWeight: "400",
      fontSize: "0.95rem",
      lineHeight: "1.6",
      "@media (min-width:992px)": {
        fontSize: "1.1rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: "var(--mui-palette-background-body)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
  },
});

export default Theme;
