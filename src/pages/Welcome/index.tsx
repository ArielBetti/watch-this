import { useEffect, useState } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

// atoms: components
import * as Atom from "./style";

// recoil: atoms
import {
  atomDarkTheme,
  atomSignInBody,
  atomSignUpBody,
} from "../../store/atoms";

// recoil: selectors
import { sendSignIn, sendSignUp } from "../../store/selectors";

// ::
const Welcome = () => {
  // local: states
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // recoil: states
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
    if (signInLoadable.state === "hasValue") {
      console.log("Sucesso", signInLoadable.contents);
    }
    if (signInLoadable.state === "loading") {
      console.log("Carregando...");
    }
  }, [signInLoadable.state, signInLoadable.contents]);

  return (
    <Atom.WelcomeContainer>
      <div>
        <Atom.WelcomeTitle>YEsye</Atom.WelcomeTitle>
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
    </Atom.WelcomeContainer>
  );
};

export default Welcome;
