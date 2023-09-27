import styled from "styled-components";

export const CustomBtn = styled.button`
  padding: 0.2rem;
  border: none;
  background: black;
  cursor: pointer;
  align-self: center;
  border-radius: 6px;
  color: var(--font);

  &.return {
    position: fixed;
    bottom: 3rem;
    right: 1rem;
    background-color: transparent;
  }

  &.theme {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 3rem;
    width: 2rem;
    height: 2rem;
    left: 0.8rem;
    border-radius: 50%;
    background: rgba(150, 145, 145, 0.7);
    transition: transform 0.3s;
    :hover,
    :active {
      transform: scale(1.2);
    }
  }

  &.detailed-forecast {
    background: rgba(103, 16, 65, 0.7);
    border: 2px solid var(--warm-dark);
    left: 1rem;
    padding: 0.3rem;
  }
`;
