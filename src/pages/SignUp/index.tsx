import { useEffect, useState, useCallback } from "react";
import { MdOutlineAddReaction } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

// types
import { IAvatar } from "../../api/types";

// webetti: components
import { Button, Modal, Paragraph } from "webetti-react-sdk";

// recoil: atoms
import { atomSignUpBody } from "../../store/atoms";

// recoil: selectors
import { sendSignUp } from "../../store/selectors";

// atoms: components
import * as Atom from "./atoms";
import CustomAvatar from "../../components/CustomAvatar";
import ContentLocker from "../../components/ContentLocker";
import Loader from "../../components/Loader";

// ::
const SignUp = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  // local: states
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<IAvatar | {}>({});
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [nameFeedBack, setNameFeedBack] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // recoil: states
  const setSignUpBody = useSetRecoilState(atomSignUpBody);
  const resetSignUpBody = useResetRecoilState(atomSignUpBody);

  // recoil: loadable
  const signUpLoadable = useRecoilValueLoadable(sendSignUp);

  const onSignUp = useCallback(() => {
    if (name && password) {
      setShowConfetti(false);
      setSignUpBody({
        name,
        password,
        avatar,
      });
    }
  }, [avatar, name, password]);

  useEffect(() => {
    if (signUpLoadable.state === "hasError") {
      if (signUpLoadable.contents?.response?.data?.message) {
        return setNameFeedBack(
          signUpLoadable.contents?.response?.data?.message
        );
      }
      setNameFeedBack("Ocorreu um erro.");
    }
    if (
      signUpLoadable.state === "hasValue" &&
      signUpLoadable?.contents !== undefined
    ) {
      setModalOpen(true);
      setShowConfetti(true);
    }
  }, [signUpLoadable.state, signUpLoadable.contents]);

  const onNameChange = useCallback((name: string) => {
    setNameFeedBack("");
    setName(name);
  }, []);

  useEffect(() => {
    resetSignUpBody();

    return () => {
      // will unmount
      resetSignUpBody();
    };
  }, []);

  return (
    <Atom.SignUpContainer>
      <ContentLocker unlock={showConfetti}>
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={800}
          tweenDuration={15000}
          gravity={0.15}
          style={{ zIndex: 10 }}
        />
      </ContentLocker>
      <Loader open={signUpLoadable.state === "loading"} />
      <Modal
        title="Sucesso!"
        open={modalOpen}
        setOpen={setModalOpen}
        textButton="Fazer login"
        actionButton={() => navigate("/entrar")}
      >
        <Paragraph>
          O usuário "{name}" foi criado com sucesso, faça o seu login agora
          mesmo!
        </Paragraph>
      </Modal>
      <CustomAvatar setConstructAvatar={setAvatar} seed={name} />
      <Atom.FormContainer>
        <Atom.InputFormContainer>
          <Atom.InputsSignIn
            label="Nome"
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Seu nome"
            type="text"
          />
          <Atom.NameFeedBackError>{nameFeedBack}</Atom.NameFeedBackError>
        </Atom.InputFormContainer>
        <Atom.InputsSignIn
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Escolha uma senha"
          type="password"
        />
        <Button bold onClick={() => onSignUp()}>
          <MdOutlineAddReaction size="20px" />
          Criar
        </Button>
      </Atom.FormContainer>
    </Atom.SignUpContainer>
  );
};

export default SignUp;
