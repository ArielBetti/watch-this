import styled from "styled-components";
import { ITheme } from "../theme/types";

export const Title = styled.h1`
  font-size: 2em;
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.[1]};
  transition: color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.[1]};
  transition: color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
`;

export const ParagraphLarge = styled.span`
  font-size: 1.35em;
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.[1]};
  transition: color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
`;

export const ParagraphBold = styled.span`
  font-size: 1.2em;
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.[1]};
  transition: color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
`;

export const Paragraph = styled.span`
  font-size: 1em;
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.[1]};
  transition: color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
`;

export const SmallText = styled.span`
  font-size: 0.8em;
  color: ${({ theme }: { theme: ITheme }) => theme?.font?.colors?.[1]};
  transition: color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
`;
