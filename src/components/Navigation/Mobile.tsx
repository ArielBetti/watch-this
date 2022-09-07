import { Dispatch, FC, SetStateAction, useCallback, useMemo } from "react";
import { MdExitToApp, MdLogin, MdOutlineAddReaction } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";
import {
  HamburguerMenu,
  HamburguerMenuItem,
  Paragraph,
  useWindowDimensions,
} from "webetti-react-sdk";
import { atomUser } from "../../store/atoms";
import { ITheme } from "../../theme/types";
import ContentLocker from "../ContentLocker";

interface NavigationMobileProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Mobile: FC<NavigationMobileProps> = ({ open, setOpen }) => {
  const theme: ITheme = useTheme();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  // recoil: states
  const user: any = useRecoilValue(atomUser);

  const dimensionsInPixel = useMemo(() => {
    if (theme?.breakpoints?.md) {
      return theme.breakpoints.md.replace("px", "");
    }

    return "0px";
  }, [width]);

  const onItemClick = useCallback(
    (route: string) => {
      navigate(route);
      setOpen(false);
    },
    [navigate, setOpen]
  );

  return (
    <ContentLocker unlock={width <= dimensionsInPixel}>
      <HamburguerMenu open={open} setOpen={setOpen} label="tanto faz">
        <ContentLocker unlock={user}>
          <HamburguerMenuItem onClick={() => onItemClick("/logout")}>
            <MdExitToApp size="20px" color={theme?.colors?.primary} />
            <Paragraph>Sair</Paragraph>
          </HamburguerMenuItem>
        </ContentLocker>
        <ContentLocker unlock={!user}>
          <HamburguerMenuItem onClick={() => onItemClick("/signin")}>
            <MdOutlineAddReaction size="20px" color={theme?.colors?.primary} />
            <Paragraph>Criar conta</Paragraph>
          </HamburguerMenuItem>
          <HamburguerMenuItem onClick={() => onItemClick("/login")}>
            <MdLogin size="20px" color={theme?.colors?.primary} />
            <Paragraph>Entrar</Paragraph>
          </HamburguerMenuItem>
        </ContentLocker>
      </HamburguerMenu>
    </ContentLocker>
  );
};

export default Mobile;
