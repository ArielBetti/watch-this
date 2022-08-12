import styled, { createGlobalStyle } from "styled-components";
import { ITheme } from "./theme/types";

export const ResetCSS = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  *, button, input, select {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const AppBaseUI = styled.div`
  font-family: "Montserrat", sans-serif;
  padding-bottom: 120px;
  height: 100vh;
  width: 100%;
  -webkit-font-smoothing: antialiased !important;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme?.colors?.background};
  transition: background-color
    ${({ theme }: { theme: ITheme }) =>
      `${theme?.transitions?.time} ${theme?.transitions?.type}`};
  @media (max-width: ${({ theme }: { theme: ITheme }) =>
      theme?.breakpoints?.sm}) {
    padding-bottom: 200px;
  }
`;
