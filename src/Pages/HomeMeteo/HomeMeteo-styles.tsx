import styled from "styled-components";

export const MeteoWrp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    gap: 2rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  > h1 {
    font-size: 2rem;
    color: var(--warm-dark);
  }

  > h3 {
    color: var(--warm-medium);
  }

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const CustomBtnWrp = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;
