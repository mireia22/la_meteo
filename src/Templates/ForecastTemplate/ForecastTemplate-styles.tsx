import styled from "styled-components";

export const ForecastWrp = styled.ul`
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SingleDayForecast = styled.div`
  background-color: rgba(251, 253, 255, 0.3);
  border-radius: 5px;
  padding: 0.2rem;
  border: 2px solid white;
  display: flex;
  min-width: 15rem;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  gap: 0rem 0.5rem;
  :first-child {
    justify-content: end;
  }
`;
export const ForecastImgWrp = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  > img {
    width: 100%;
  }
`;

export const SingleHourForecast = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 5px;
  padding: 0.1rem;
  > p {
    font-size: 0.8rem;
  }
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
