import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const UserListsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const SkeletonContainer = styled.div`
  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    justify-content: flex-start;

    @media (max-width: ${({ theme }: { theme: ITheme }) =>
        theme?.breakpoints?.md}) {
      min-width: 100%;
      max-width: 100%;
    }
  }
`;
