import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: { theme: ITheme }) =>
    `${theme.colors?.neutral?.pure}4D`};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Disclaimer = styled.span`
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.contrast};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
