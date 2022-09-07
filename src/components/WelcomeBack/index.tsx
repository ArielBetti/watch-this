import { MdLogin, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";
import { Button } from "webetti-react-sdk";
import { atomUser } from "../../store/atoms";
import { ITheme } from "../../theme/types";

// atoms: components
import * as Atom from "./atom";

const WelcomeBack = () => {
  const theme: ITheme = useTheme();
  const navigate = useNavigate();

  const user = useRecoilValue(atomUser);

  return (
    <Atom.WelcomeBackContainer>
      <Atom.WelcomeBackCard>
        <Atom.WelcomeBackAvatar
          src={user?.avatar?.url}
          alt="Illustração de avatar"
        />
        <Button bold onClick={() => navigate("/home")}>
          <MdLogin size="20px" color={theme?.font?.colors?.pure} />
          Continuar como {user?.name}
        </Button>
        <Button bold onClick={() => navigate("/logout")}>
          <MdLogout size="20px" color={theme?.font?.colors?.pure} />
          Entrar com outra conta
        </Button>
      </Atom.WelcomeBackCard>
    </Atom.WelcomeBackContainer>
  );
};

export default WelcomeBack;
