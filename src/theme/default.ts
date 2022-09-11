import { IWebettiTheme } from "webetti-react-sdk";

export const dark = (): IWebettiTheme => ({
  colors: {
    background: "#121212",
    neutral: {
      pure: "#212121",
      1: "#1b1b1b",
      2: "#424242",
      3: "#373737",
    },
    primary: "#9147ff",
    secondary: "#FEC260",
    feedback: {
      error: "#cc0000",
      warning: "#ff8800",
      success: "#007e33",
      info: "0d47a1",
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
      inverse: "#000",
      pure: "#FFF",
    },
  },
  breakpoints: {
    xsm: "360px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1350px",
  },
  transitions: {
    time: "0.3s",
    type: "ease",
  },
  spacing: {
    xxxs: "4px",
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "40px",
    xl: "48px",
    xxl: "56px",
    xxxl: "64px",
  },
});
