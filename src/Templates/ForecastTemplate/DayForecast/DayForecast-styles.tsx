import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
    
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`;
export const SingleDayForecast = styled.ul`
  background-color: rgba(251, 253, 255, 0.3);
  transition: background-image 0.5s ease;
  animation: ${fadeIn} 0.5s ease;
  border-radius: 5px;
  padding: 0.2rem;
  border: 2px solid white;
  display: flex;
  min-width: 15rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 0.5rem;
  min-height: 80px;
`;
