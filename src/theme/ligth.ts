import { ITheme } from "./types";

export const ligth = (): Partial<ITheme> => ({
  colors: {
    background: "#f7f7f7",
    neutral: {
      pure: "#ffffff",
      1: "#efeff1",
      2: "#e5e5e5",
      3: "#eaeaea",
    },
    primary: "#9147ff",
    secondary: "#FEC260",
  },
  font: {
    colors: {
      contrast: "#9147ff",
      1: "#0E0E10",
      2: "#1F1F23",
      3: "#000000B3",
      dark: "#000",
      white: "#FFF",
      inverse: "#FFF",
      pure: "#000",
    },
  },
});
