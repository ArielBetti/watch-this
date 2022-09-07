import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  Dropdown,
  Header,
  Heading,
  Button,
  Paragraph,
  useWindowDimensions,
  HamburguerMenu,
  HamburguerMenuItem,
} from "webetti-react-sdk";

import {
  MdExitToApp,
  MdLogin,
  MdMovieFilter,
  MdOutlineAddReaction,
} from "react-icons/md";

// recoil: atoms
import { atomUser } from "../../store/atoms";

// atoms: components
import * as Atom from "./atoms";
import { useTheme } from "styled-components";
import { ITheme } from "../../theme/types";
import { useLocation, useNavigate } from "react-router-dom";
import ContentLocker from "../ContentLocker";
import { dropdownItems } from "./config";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Navigation = () => {
  const theme: ITheme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  // local: states
  const [open, setOpen] = useState<boolean>(false);
  const [hamburguerToggle, setHamburguerToggle] = useState<boolean>(false);

  // recoil: states
  const user: any = useRecoilValue(atomUser);

  // memo: state

  const dimensionsInPixel = useMemo(() => {
    if (theme?.breakpoints?.md) {
      return theme.breakpoints.md.replace("px", "");
    }

    return "0px";
  }, [width]);

  useEffect(() => {
    if (theme?.breakpoints?.md) {
      if (user && width > theme.breakpoints.md.replace("px", "")) {
        setHamburguerToggle(false);
      }
    }
  }, [theme?.breakpoints?.md, user, width]);

  useEffect(() => {
    setOpen(hamburguerToggle);
  }, [hamburguerToggle]);

  return (
    <Header trackHeaderActive={open}>
      <Atom.NavigationContainer>
        <Atom.NavigationLogo onClick={() => navigate("/")}>
          <MdMovieFilter size="35px" color={theme?.colors?.primary} />
          <Heading variant="heading-5">WatchThis</Heading>
        </Atom.NavigationLogo>
        <Desktop />
        <Mobile open={hamburguerToggle} setOpen={setHamburguerToggle} />
      </Atom.NavigationContainer>
    </Header>
  );
};

export default Navigation;
