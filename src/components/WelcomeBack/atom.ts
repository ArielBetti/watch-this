import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const WelcomeBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const WelcomeBackAvatar = styled(LazyLoadImage)`
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
`;
