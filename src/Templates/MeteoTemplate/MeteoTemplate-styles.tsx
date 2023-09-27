import { styled } from "styled-components";
export const SingleLocationWrp = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    color: var(--font);
    padding: 0.2rem;
    background-color: rgba(198, 40, 56, 0.5);
    border-radius: 5px;
  }
`;

export const MinMaxTempWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  > p {
    font-weight: bold;
    color: var(--font);
    padding: 0.2rem;
    border-radius: 5px;
    @media (min-width: 768px) {
      color: var(--warm-dark);
    }
  }
`;

export const WeatherIcon = styled.div`
  height: 12rem;
  > img {
    height: 100%;
  }
`;
