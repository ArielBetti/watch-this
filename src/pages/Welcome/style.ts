import styled from "styled-components";

export const WelcomeContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 60px;
  @media (max-width: ${(props) => props.theme?.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: ${(props) => props?.theme?.colors?.primary} !important;
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    font-size: 3em;
  }
`;

export const Apresentation = styled.div`
  max-width: 400px;
  line-height: 1.5em;
  flex-wrap: wrap;
`;

export const LoginApresentation = styled.div`
  max-width: 300px;
`;

export const Illustration = styled.img`
  width: 500px;
`;
