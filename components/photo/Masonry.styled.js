import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Masonry = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
  gap: 1rem;
  ${up("lg")} {
    grid-template-columns: repeat(3, 1fr);
  }
  img {
    aspect-ratio: 1 1;
  }
`;

export const MasonryChild = styled.div``;
