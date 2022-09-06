import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  Dropdown,
  Header,
  Heading,
  Button,
  Paragraph,
} from "webetti-react-sdk";

import { MdLogin, MdMovieFilter, MdOutlineAddReaction } from "react-icons/md";

// recoil: atoms
import { atomUser } from "../../store/atoms";

// atoms: components
import * as Atom from "./atoms";
import { useTheme } from "styled-components";
import { ITheme } from "../../theme/types";
import { useLocation, useNavigate } from "react-router-dom";
import ContentLocker from "../ContentLocker";
import { dropdownItems } from "./config";

const Navigation = () => {
  const theme: ITheme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // local: states
  const [open, setOpen] = useState<boolean>(false);

  // recoil: states
  const user: any = useRecoilValue(atomUser);

  // memo: state
  const displaySignButtons = useMemo(() => {
    const lockPath = pathname === "/" || pathname === "/login";

    if (user) return false;
    if (lockPath) return false;

    return true;
  }, [pathname, user]);

  return (
    <Header trackHeaderActive={open}>
      <Atom.NavigationContainer>
        <Atom.NavigationLogo onClick={() => navigate("/")}>
          <MdMovieFilter size="35px" color={theme?.colors?.primary} />
          <Heading variant="heading-5">WatchThis</Heading>
        </Atom.NavigationLogo>
        <ContentLocker unlock={displaySignButtons}>
          <Atom.NavigateSignButtons>
            <Button bold onClick={() => navigate("/signin")}>
              <MdOutlineAddReaction
                size="20px"
                color={theme?.font?.colors?.pure}
              />
              Criar
            </Button>
            <Button bold onClick={() => navigate("/login")}>
              <MdLogin size="20px" color={theme?.font?.colors?.pure} />
              Entrar
            </Button>
          </Atom.NavigateSignButtons>
        </ContentLocker>
        <ContentLocker unlock={user}>
          <div>
            <Dropdown
              label={user?.name}
              avatar={user?.avatar?.url}
              avatarRadius="rounded"
              items={dropdownItems({ theme, navigate })}
            />
          </div>
        </ContentLocker>
      </Atom.NavigationContainer>
    </Header>
  );
};

export default Navigation;
