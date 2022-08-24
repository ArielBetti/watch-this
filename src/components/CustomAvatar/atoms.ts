import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

export const CustomAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 150px;
  border-radius: 5px;
`;
