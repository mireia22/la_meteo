import styled from "styled-components";

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
    font-weight: bold;
  }
`;

export const ForecastImgWrp = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  > img {
    width: 100%;
  }
`;
