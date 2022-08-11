import { selector } from "recoil";
import { ENDPOINTS } from "../../api/endpoints";
import { requester } from "../../api/requester";
import { atomSignInBody, atomSignUpBody } from "../atoms";

export const sendSignUp = selector({
  key: "sendSignUp",
  get: async ({ get }) => {
    const userSignUp = get(atomSignUpBody);

    if (userSignUp) {
      const { data } = await requester({
        baseURL: process.env.REACT_APP_WATCH_THIS_BASE_API,
      }).post(ENDPOINTS.register, userSignUp);

      return data;
    }
  },
});

export const sendSignIn = selector({
  key: "sendSignIn",
  get: async ({ get }) => {
    const userSignIn = get(atomSignInBody);

    if (userSignIn) {
      const { data } = await requester({
        baseURL: process.env.REACT_APP_WATCH_THIS_BASE_API,
      }).post(ENDPOINTS.login, userSignIn);

      return data;
    }
  },
});
