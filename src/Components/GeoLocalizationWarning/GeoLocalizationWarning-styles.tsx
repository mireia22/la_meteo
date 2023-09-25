import styled from "styled-components";

export const GeoWarningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: var(--font);
  background-color: var(--warm-dark);

  gap: 0.8rem;
  > span {
    font-weight: bold;
    padding: 0.3rem;
    border-radius: 5px;
    color: var(--warm-medium);
    background-color: var(--font);
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  > p {
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
