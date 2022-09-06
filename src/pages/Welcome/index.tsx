import { useEffect, useState } from "react";
import { stringify } from "qs";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

// atoms: components
import * as Atom from "./style";

import welcomeIllustratrion from "../../assets/welcome.svg";

import { Container, Heading, Paragraph } from "webetti-react-sdk";

// recoil: atoms
import {
  atomDarkTheme,
  atomSignInBody,
  atomSignUpBody,
  atomUser,
} from "../../store/atoms";

// recoil: selectors
import CustomAvatar from "../../components/CustomAvatar";
import SignIn from "../SignIn";

// ::
const Welcome = () => {
  // local: states
  const [avatar, setAvatar] = useState<any>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Atom.WelcomeContainer>
      <Atom.Apresentation>
        <Atom.WelcomeTitle>WatchThis</Atom.WelcomeTitle>
        <Paragraph>
          Com WatchThis você pode criar listas dos conteudos que você mais gosta
          compartilhar com seus amigos, interagir com outras pessoas sobre os
          seus conteudos favoritos!
        </Paragraph>
      </Atom.Apresentation>
      <SignIn />
    </Atom.WelcomeContainer>
  );
};

export default Welcome;
