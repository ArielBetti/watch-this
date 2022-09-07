import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const WelcomeBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeBackAvatar = styled.img`
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
`;

export const WelcomeBackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    width: 100%;
  }
`;
