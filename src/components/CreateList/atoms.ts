import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const CreateListCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme?.colors?.neutral?.pure};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;
  min-height: 50px;
  max-width: 200px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ${({ theme }: { theme: ITheme }) => theme?.transitions?.time};

  :hover {
    border: 1px solid
      ${({ theme }: { theme: ITheme }) => theme?.colors?.primary};
  }
`;
