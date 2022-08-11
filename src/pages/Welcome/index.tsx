import { useEffect, useState } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { atomSignInBody, atomSignUpBody } from "../../store/atoms";
import { sendSignIn, sendSignUp } from "../../store/selectors";

function Welcome() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const setSignUpBody = useSetRecoilState(atomSignUpBody);
  const setSignInBody = useSetRecoilState(atomSignInBody);

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
    <div className="App">
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
      <button onClick={() => onSignUp()}>Registrar</button>
      <button onClick={() => onSignIn()}>Entrar</button>
    </div>
  );
}

export default Welcome;
