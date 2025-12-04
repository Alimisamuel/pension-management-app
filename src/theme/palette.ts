import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#1D69D8",
    dark: "#061B5C",
    light: "#F3F6FC",
  },
  secondary: {
    main: "#3EC28B",
  },
  background: {
    default: "#ffffff",
    paper: "#f7f7f7",

    // default: "#F3F6FC",
    // paper: "#ffffff",
  },
  text: {
    primary: "#333F4F",
    secondary: "#626262",
    disabled: "#7D7D7D",
  },

  success: { main: "#3EC28B" },
  error: { main: "#FF5F3E" },

  // Custom colors


};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#1D69D8",
  },
  secondary: {
    main: "#3EC28B",
  },
  background: {
    default: "#121212",
    paper: "#1d1d1d",
  },
  text: {
    primary: "#fff",
    secondary: "#ccc",
  },
};