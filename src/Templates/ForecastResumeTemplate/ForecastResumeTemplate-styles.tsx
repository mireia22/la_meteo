import styled from "styled-components";

export const ForecastResumeWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ForecastDaysWrp = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const ForecastSingleDayWrp = styled.li`
  background-color: rgba(78, 10, 48, 0.5);
  padding: 0.4rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgWrp = styled.div`
  width: 2.5rem;
  > img {
    width: 100%;
    object-fit: contain;
  }
`;
