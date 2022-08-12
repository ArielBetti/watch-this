import { ITheme } from "./type";

export const dark = (): ITheme => ({
  colors: {
    background: "#180F20",
    neutral: {
      pure: "#0E0315",
      1: "#12005e",
      2: "#4a148c",
      3: "#7b1fa2",
    },
    primary: "#FF6D00",
    secondary: "#d81b60",
    feedback: {
      error: "#cc0000",
      warning: "#ff8800",
      success: "#007e33",
    },
  },
  font: {
    colors: {
      contrast: "#FF6D00",
      1: "#fafafa",
      2: "#f5f5f5",
      3: "eeeeee",
      dark: "#000",
      white: "#FFF",
      inverse: "#212121",
      pure: "#000",
    },
  },
  breakpoints: {
    xsm: "360px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1350px",
  },
});
