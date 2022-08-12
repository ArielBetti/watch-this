import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import AppRouter from "./routes";
import selectTheme from "./theme";

import { ThemeProvider } from "styled-components";
import { atomDarkTheme } from "./store/atoms";
import { ITheme } from "./theme/type";

const App = () => {
  const prefersDarkMode = useRecoilValue(atomDarkTheme);

  // theme changer
  const theme: ITheme = useMemo(
    () => (prefersDarkMode ? selectTheme("dark") : selectTheme("ligth")),
    [prefersDarkMode]
  );

  console.log("@THEME", prefersDarkMode, theme);

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
