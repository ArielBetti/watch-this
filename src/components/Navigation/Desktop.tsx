import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Dropdown, useWindowDimensions } from "webetti-react-sdk";
import { MdLogin, MdOutlineAddReaction } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

// recoil: atoms
import { atomUser } from "../../store/atoms";

// config
import { dropdownItems } from "./config";

// atoms: components
import ContentLocker from "../ContentLocker";
import * as Atom from "./atoms";

//types
import { ITheme } from "../../theme/types";

// ::
const Desktop = () => {
  const theme: ITheme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  // recoil: states
  const user: any = useRecoilValue(atomUser);

  const dimensionsInPixel = useMemo(() => {
    if (theme?.breakpoints?.md) {
      return theme.breakpoints.md.replace("px", "");
    }

    return "0px";
  }, [width]);

  const displaySignButtons = useMemo(() => {
    const lockPath = pathname === "/" || pathname === "/login";

    if (user) return false;
    if (lockPath) return false;

    return true;
  }, [pathname, user]);

  return (
    <ContentLocker unlock={width > dimensionsInPixel}>
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
      </ContentLocker>
    </ContentLocker>
  );
};

export default Desktop;
