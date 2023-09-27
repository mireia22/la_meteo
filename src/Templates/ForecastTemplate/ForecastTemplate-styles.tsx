import styled from "styled-components";

export const ForecastWrp = styled.ul`
  padding: 0rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SingleDayWrp = styled.div`
  display: flex;
  gap: 1rem;
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
