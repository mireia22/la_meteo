import styled from "styled-components";

export const ForecastResumeWrp = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 25rem;
  }
`;

export const ForecastDaysWrp = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ForecastSingleDayWrp = styled.li`
  background-color: rgba(78, 10, 48, 0.7);
  padding: 0.4rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 25rem;
    border: 2px solid var(--warm-dark);
  }
`;

export const ImgWrp = styled.div`
  width: 2.5rem;
  > img {
    width: 100%;
    object-fit: contain;
  }
`;
