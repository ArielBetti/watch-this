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
  const [avatar, setAvatar] = useState<any>({});

  return (
    <>
      <CustomAvatar setConstructAvatar={setAvatar} seed="sa" />
    </>
  );
};

export default Welcome;
