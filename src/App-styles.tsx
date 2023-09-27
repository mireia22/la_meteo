import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    
  }
  to {
    opacity: 1;
  }
`;

export const AppWrp = styled.div`
  background-size: cover;
  min-height: 100vh;
  background-image: ${({ theme }) => theme.backgroundImage};
  transition: background-image 0.5s ease;
  animation: ${fadeIn} 0.5s ease;
`;

export const MainWrp = styled.main`
  min-height: calc(100vh - (48px + 37.59px));
  padding: 0rem 1.2rem;
`;
