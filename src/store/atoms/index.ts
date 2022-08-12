import { atom } from "recoil";
import { localStorageEffect } from "../../utils/localStorageEffect";

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

export const atomDarkTheme = atom({
  key: "atomDarkTheme",
  default: true,
  effects: [localStorageEffect("dark_mode")],
});
