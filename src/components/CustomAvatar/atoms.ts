import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { ITheme } from "../../theme/types";

export const CustomAvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  flex-wrap: wrap;
  gap: 25px;
`;

export const AvatarOptionsSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100px;
`;

export const AvatarOptionsControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  min-width: 100px;
`;

export const AvatarOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AvatarIllustration = styled(LazyLoadImage)`
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const AvatarCard = styled.div`
  padding: 20px;
  display: flex;
  max-width: 300px;
  gap: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }: { theme: ITheme}) => theme?.colors?.primary};
  background-color: ${({ theme }: { theme: ITheme}) => theme?.colors?.neutral?.pure};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
