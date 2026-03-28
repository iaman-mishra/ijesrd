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
          contrastText: "#fff",
        },
        secondary: {
          main: "#FF8966",
          light: "#FFDBD1",
          contrastText: "#fff",
        },
        text: {
          primary: "#1A1C1C",
          secondary: "#00000099",
          disabled: "#424752",
        },
        background: {
          paper: "#F9FAFB",
          default: "#fff",
        },
        divider: "#F3F4F6",
      },
    },
    // dark: {
    //   palette: {
    //     primary: {
    //       main: "#1976d2",
    //       light: "#42a5f5",
    //       dark: "#1565c0",
    //       contrastText: "#fff",
    //     },
    //     secondary: {
    //       main: "#ff8966",
    //       // light: "#FFD3C6",
    //       // dark: "#ff8966",
    //       contrastText: "#fff",
    //     },
    //     background: {
    //       paper: "#212121",
    //       default: "#121212",
    //     },
    //   },
    // },
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
        // sizeLarge: {
        //   minHeight: 48,
        //   paddingY: 1.5,
        //   fontSize: "1rem",
        //   fontWeight: 600,
        // },
      },
    },
  },
});

export default Theme;
