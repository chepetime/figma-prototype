import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5rem;
  max-width: 600px;
  margin: 0 auto;
  ${({ onlyX }) =>
    onlyX &&
    css`
      padding: 0 0.5rem;
    `}

  ${({ onlyY }) =>
    onlyY &&
    css`
      padding: 0.5rem 0;
    `}
`;
