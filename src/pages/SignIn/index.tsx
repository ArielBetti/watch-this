import { useEffect, useState, useCallback } from "react";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

// webetti: components
import { Button, Input } from "webetti-react-sdk";

// recoil: atoms
import { atomSignInBody, atomToken, atomUser } from "../../store/atoms";

// recoil: selectors
import { sendSignIn } from "../../store/selectors";

// atoms: components
import * as Atom from "./atoms";
import Loader from "../../components/Loader";
import { useTheme } from "styled-components";
import { ITheme } from "../../theme/types";

// ::
const SignIn = () => {
  const theme: ITheme = useTheme();
  const navigate = useNavigate();

  // local: states
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginFeedbackError, setLoginFeedbackError] = useState("");

  // recoil: states
  const setSignInBody = useSetRecoilState(atomSignInBody);
  const [user, setUser] = useRecoilState(atomUser);
  const setToken = useSetRecoilState(atomToken);

  // recoil:states: reset
  const resetSignInBody = useResetRecoilState(atomSignInBody);

  // recoil: loadable
  const signInLoadable = useRecoilValueLoadable(sendSignIn);

  const onSignIn = useCallback(() => {
    if (name && password) {
      setSignInBody({
        name,
        password,
      });
    }
  }, [name, password]);

  const onNameChange = useCallback((name: string) => {
    setLoginFeedbackError("");
    setName(name);
  }, []);

  useEffect(() => {
    if (signInLoadable.state === "hasError") {
      if (signInLoadable.contents?.response?.data?.message) {
        return setLoginFeedbackError(
          signInLoadable.contents?.response?.data?.message
        );
      }
      setLoginFeedbackError("Ocorreu um erro.");
    }
    if (
      signInLoadable.state === "hasValue" &&
      signInLoadable?.contents !== undefined
    ) {
      setToken(signInLoadable?.contents?.token);
      setUser(signInLoadable?.contents?.user);
      navigate("/home");
    }
  }, [signInLoadable.state, signInLoadable.contents]);

  useEffect(() => {
    resetSignInBody();

    return () => {
      // will unount
      resetSignInBody();
    };
  }, []);

  return (
    <Atom.SignInContainer>
      <Atom.SignInFormsContainer>
        <Loader open={signInLoadable.state === "loading"} />
        <Input
          label="Nome"
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Seu nome"
          type="text"
        />
        <Input
          label="Senha"
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Escolha uma senha"
          type="password"
        />
        <Atom.LoginFeedBackError>{loginFeedbackError}</Atom.LoginFeedBackError>
        <Button bold onClick={() => onSignIn()}>
          <MdLogin size="20px" color={theme?.font?.colors?.pure} />
          Entrar
        </Button>
      </Atom.SignInFormsContainer>
    </Atom.SignInContainer>
  );
};

export default SignIn;
