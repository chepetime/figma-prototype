import styled from "styled-components";

export const Masonry = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
  gap: 1rem;
`;

export const MasonryChild = styled.div``;
