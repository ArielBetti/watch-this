import { atom } from "recoil";
import { IUser } from "../../api/types";
import { localStorageEffect } from "../../utils/localStorageEffect";

export const atomUser = atom<IUser | undefined>({
  key: "atomUser",
  default: undefined,
  effects: [localStorageEffect("current_user")],
});

export const atomToken = atom<string | undefined>({
  key: "atomToken",
  default: undefined,
  effects: [localStorageEffect("token")],
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
