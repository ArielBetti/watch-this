import styled from "styled-components";
import { Input, Paragraph } from "webetti-react-sdk";
import { ITheme } from "../../theme/types";

export const SignUpContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  max-width: 300px;
  width: 100%;
`;

export const InputFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const InputsSignIn = styled(Input)`
  width: 100%;
`;

export const NameFeedBackError = styled.p`
  color: ${({ theme }: { theme: ITheme }) => theme?.colors?.feedback?.error};
`;
