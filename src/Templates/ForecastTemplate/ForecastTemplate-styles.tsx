import styled from "styled-components";

export const ForecastWrp = styled.ul`
  padding: 0rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, auto);

    > h1 {
      grid-column: span 2;
      text-align: center;
      color: var(--warm-dark);
    }
  }
`;

export const SingleDayWrp = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1px;

  > h4 {
    color: white;
  }

  &:nth-child(-n + 3) {
    > h4 {
      color: black;
    }
  }
`;
