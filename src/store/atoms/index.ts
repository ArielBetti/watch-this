import { atom } from "recoil";

export const atomUser = atom({
  key: "atomUser",
  default: undefined,
});

export const atomSignUpBody = atom<any>({
  key: "atomSignUpBody",
  default: undefined,
});

export const atomSignInBody = atom<any>({
  key: "atomSignInBody",
  default: undefined,
});
