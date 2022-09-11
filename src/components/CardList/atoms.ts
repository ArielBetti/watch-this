import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const CardListContainer = styled.div<{ slideLength: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  border-radius: 5px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme?.colors?.neutral?.pure};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;
  min-width: 325px;
  max-width: 325px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border
    ${({ theme }: { theme: ITheme }) => theme?.transitions?.time};

  :hover {
    border: 1px solid
      ${({ theme }: { theme: ITheme }) => theme?.colors?.primary};
    .movies_tumbs {
      transform: translateX(
        ${(props) =>
          props?.slideLength ? `${-props?.slideLength + 190}px` : 0}
      );
    }
  }

  @media (max-width: ${({ theme }: { theme: ITheme }) =>
      theme?.breakpoints?.md}) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const MoviesTumbContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
`;

export const MoviesTumbs = styled.div<{ width: number }>`
  width: ${(props) => `${props?.width}px`};
  margin-left: 0;
  gap: 10px;
  display: flex;
  transition: transform ${(props) => `${props?.width * 2}ms`};
`;

export const MovieTumb = styled(LazyLoadImage)`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const TitleListContainer = styled.div`
  max-width: 100%;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
