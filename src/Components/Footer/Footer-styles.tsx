import styled from "styled-components";

export const FooterWrp = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.5rem;
  background-color: var(--warm-dark);
  align-items: center;

  > p {
    font-size: 0.6rem;
    letter-spacing: 1px;
  }
`;

export const AnchorWrp = styled.div`
  display: flex;
  gap: 0.5rem;

  > a {
    cursor: pointer;

    > img {
      width: 1.5rem;
    }
  }
`;
