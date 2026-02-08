import { createTheme } from "@mui/material/styles";

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
          light: "#FFD3C6",
          dark: "#ff8966",
          contrastText: "#fff",
        },
        text: {
          primary: "#000000de",
          secondary: "#00000099",
          disabled: "#00000061",
        },
        background: {
          paper: "#fff",
          default: "#fff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#1976d2",
          light: "#42a5f5",
          dark: "#1565c0",
          contrastText: "#fff",
        },
        secondary: {
          main: "#ff8966",
          // light: "#FFD3C6",
          // dark: "#ff8966",
          contrastText: "#fff",
        },
        background: {
          paper: "#212121",
          default: "#121212",
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
          backgroundColor: "var(--mui-palette-background-default)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "all 0.2s ease",
          borderRadius: "12px",
        },
        sizeLarge: {
          minHeight: 48,
          paddingY: 1.5,
          fontSize: "1rem",
          fontWeight: 600,
        },
      },
    },
  },
});

export default Theme;
