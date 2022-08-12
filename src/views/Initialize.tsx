import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import AppRouter from "../routes";
import selectTheme from "../theme";

import { ThemeProvider } from "styled-components";
import { atomDarkTheme } from "../store/atoms";
import { ITheme } from "../theme/types";
import { AppBaseUI, ResetCSS } from "../globalStyles";

const Initialize = () => {
  const prefersDarkMode = useRecoilValue(atomDarkTheme);

  // theme changer
  const theme: ITheme = useMemo(
    () => (prefersDarkMode ? selectTheme("dark") : selectTheme("ligth")),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <AppBaseUI>
        <AppRouter />
      </AppBaseUI>
    </ThemeProvider>
  );
};

export default Initialize;
