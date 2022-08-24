import styled from 'styled-components';
import { Container } from 'webetti-react-sdk';

export const NavigationContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  gap: 5px;
  cursor: pointer;
`;
