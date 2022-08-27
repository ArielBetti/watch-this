import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import AppRouter from "../routes";
import selectTheme from "../theme";

import { atomDarkTheme } from "../store/atoms";
import { AppBaseUI, ResetCSS } from "../globalStyles";
import { Container, WebettiProvider } from "webetti-react-sdk";
import Navigation from "../components/Navigation";

const Initialize = () => {
  const prefersDarkMode = useRecoilValue(atomDarkTheme);

  // theme changer
  const theme: any = useMemo(
    () => (prefersDarkMode ? selectTheme("dark") : selectTheme("ligth")),
    [prefersDarkMode]
  );

  return (
    <WebettiProvider theme={theme}>
      <ResetCSS />
      <AppBaseUI>
        <Navigation />
        <Container>
          <AppRouter />
        </Container>
      </AppBaseUI>
    </WebettiProvider>
  );
};

export default Initialize;
