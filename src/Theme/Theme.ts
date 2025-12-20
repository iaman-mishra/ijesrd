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

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#14579E",
        },
        secondary: {
          main: "#ff8966",
        },
        text: {
          primary: "#636c77",
          secondary: "#FFFFFF",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#14579E",
        },
        secondary: {
          main: "#ff8966",
        },
        text: {
          primary: "#fff",
          secondary: "#636c77",
        },
      },
    },
  },

  typography: {
    fontFamily: "var(--font-quicksand)",
    h1: {
      color: "text.primary",
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
      color: "text.primary",
      fontSize: "1.75rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      color: "text.primary",
      fontSize: "1.5rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      color: "text.primary",
      fontSize: "1.25rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      color: "text.primary",
      fontSize: "1rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      color: "text.primary",
      fontSize: "0.5rem",
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (min-width:992px)": {
        fontSize: "0.75rem",
      },
    },
    subtitle1: {
      color: "text.primary",
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
