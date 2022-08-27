import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignInFormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  max-width: 300px;
  width: 100%;
`;

export const LoginFeedBackError = styled.p`
  color: ${({ theme }: { theme: ITheme }) => theme?.colors?.feedback?.error};
`;
