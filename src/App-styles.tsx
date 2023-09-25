import { styled } from "styled-components";

export const AppWrp = styled.div`
  background-size: cover;
  min-height: 100vh;
  background-image: ${({ theme }) => theme.backgroundImage};
`;
export const MainWrp = styled.main`
  min-height: calc(100vh - (48px + 37.59px));
  padding: 0rem 1.2rem;
`;
