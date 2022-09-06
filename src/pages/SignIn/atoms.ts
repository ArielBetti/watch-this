import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const SignInFormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme?.colors?.neutral?.pure};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

export const LoginFeedBackError = styled.p`
  color: ${({ theme }: { theme: ITheme }) => theme?.colors?.feedback?.error};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (max-width: ${(props) => props.theme?.breakpoints.lg}) {
    button {
      width: 100%;
    }
  }
`;
