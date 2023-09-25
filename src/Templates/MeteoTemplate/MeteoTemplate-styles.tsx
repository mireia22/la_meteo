import { styled } from "styled-components";
export const SingleLocationWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 4rem;
    color: var(--warm-dark);
  }
  > h2 {
    letter-spacing: 2px;
    font-size: 2rem;
    color: var(--warm-medium);
  }

  > h3 {
    color: var(--warm-dark);
  }

  > p {
    font-weight: bold;
    color: white;
  }
`;

export const MinMaxTempWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  > p {
    color: var(--warm-medium);
  }
`;

export const WeatherIcon = styled.div`
  height: 12rem;
  > img {
    height: 100%;
  }
`;
