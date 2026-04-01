import { createTheme } from "@mui/material";

const Theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#0056B3",
          light: "#1976D2",
          dark: "#003D82",
          contrastText: "#fff",
        },
        secondary: {
          main: "#FF8966",
          light: "#FFB39A",
          dark: "#CC6E52",
          contrastText: "#fff",
        },
        text: {
          primary: "#1A1C1C",
          secondary: "#5F6368",
          disabled: "#9E9E9E",
        },
        background: {
          paper: "#F3F4F6",
          default: "#FFFFFF",
        },
        action: {
          hover: "rgba(0, 86, 179, 0.04)",
          selected: "rgba(0, 86, 179, 0.08)",
          disabled: "rgba(0, 0, 0, 0.26)",
          disabledBackground: "rgba(0, 0, 0, 0.12)",
        },
        divider: "rgba(0, 0, 0, 0.12)",
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#42A5F5",
          light: "#64B5F6",
          dark: "#1E88E5",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#FF8A65",
          light: "#FFAB91",
          dark: "#F57C00",
          contrastText: "#FFFFFF",
        },
        text: {
          primary: "#E8EAED",
          secondary: "#9AA0A6",
          disabled: "#5F6368",
        },
        background: {
          paper: "#1E1E1E",
          default: "#121212",
        },
        action: {
          hover: "rgba(66, 165, 245, 0.08)",
          selected: "rgba(66, 165, 245, 0.16)",
          disabled: "rgba(255, 255, 255, 0.3)",
          disabledBackground: "rgba(255, 255, 255, 0.12)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
        error: {
          main: "#EF5350",
          light: "#E57373",
          dark: "#C62828",
          contrastText: "#FFFFFF",
        },
        warning: {
          main: "#FFB74D",
          light: "#FFCC80",
          dark: "#F57C00",
          contrastText: "#FFFFFF",
        },
        success: {
          main: "#66BB6A",
          light: "#81C784",
          dark: "#2E7D32",
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#42A5F5",
          light: "#64B5F6",
          dark: "#1E88E5",
          contrastText: "#FFFFFF",
        },
      },
    },
  },

  typography: {
    fontFamily: "var(--font-inter)",
    body1: {
      lineHeight: 1,
    },
    body2: {
      lineHeight: 1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarGutter: "stable",
        },
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
          borderRadius: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default Theme;
