import styled from "styled-components";

export const ForecastResumeWrp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  gap: 1rem;
  border-radius: 5px;
`;

export const ForecastDaysWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 15px;
`;

export const ForecastSingleDayWrp = styled.li`
  background-color: rgba(78, 10, 48, 0.5);
  padding: 0.4rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 6rem;

  > p {
    color: white;
  }
`;

export const ImgWrp = styled.div`
  max-width: 2.5rem;
  > img {
    width: 100%;
  }
`;
