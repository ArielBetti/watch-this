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

import { Container } from "webetti-react-sdk";

// recoil: atoms
import {
  atomDarkTheme,
  atomSignInBody,
  atomSignUpBody,
  atomUser,
} from "../../store/atoms";

// recoil: selectors
import { sendSignIn, sendSignUp } from "../../store/selectors";
import CustomAvatar from "../../components/CustomAvatar";

// ::
const Welcome = () => {
  // local: states
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<any>({});

  // recoil: states
  const [user, setUser] = useRecoilState(atomUser);
  const setSignUpBody = useSetRecoilState(atomSignUpBody);
  const setSignInBody = useSetRecoilState(atomSignInBody);
  const [toggleTheme, setToggleTheme] = useRecoilState(atomDarkTheme);

  // recoil: loadables
  const signUpLoadable = useRecoilValueLoadable(sendSignUp);
  const signInLoadable = useRecoilValueLoadable(sendSignIn);

  const onSignUp = () => {
    if (name && password) {
      setSignUpBody({
        name,
        password,
        avatar: {
          ...avatar,
          seed: name,
        },
      });
    }
  };

  const onSignIn = () => {
    if (name && password) {
      setSignInBody({
        name,
        password,
      });
    }
  };

  useEffect(() => {
    if (signUpLoadable.state === "hasError") {
      console.log("Ocorreu um erro", signUpLoadable.contents);
    }
    if (signUpLoadable.state === "hasValue") {
      console.log("Sucesso", signUpLoadable.contents);
    }
    if (signUpLoadable.state === "loading") {
      console.log("Carregando...");
    }
  }, [signUpLoadable.state, signUpLoadable.contents]);

  useEffect(() => {
    if (signInLoadable.state === "hasError") {
      console.log("Ocorreu um erro", signInLoadable.contents);
    }
    if (
      signInLoadable.state === "hasValue" &&
      signInLoadable?.contents !== undefined
    ) {
      setUser(signInLoadable.contents?.user);
    }
    if (signInLoadable.state === "loading") {
      console.log("Carregando...");
    }
  }, [signInLoadable.state, signInLoadable.contents]);

  return (
    <>
      <Container>
        <CustomAvatar setConstructAvatar={setAvatar} seed={name} />
        <div>
          <Atom.WelcomeTitle variant="heading-1">YEsye</Atom.WelcomeTitle>
        </div>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setToggleTheme(!toggleTheme)}>
            Alterar tema
          </button>
          <button onClick={() => onSignUp()}>Registrar</button>
          <button onClick={() => onSignIn()}>Entrar</button>
        </div>
      </Container>
    </>
  );
};

export default Welcome;
