import styled from "styled-components";

import { FlexCenter } from "@/components/theme/mixins";

export const Navigation = styled.div`
  height: 5.125rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 300;
  border-top: solid 1px rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  display: flex;
  padding: 0.25rem 0;
  max-width: 600px;
  margin: 0 auto;
`;

export const SimpleLink = styled.div`
  flex: 4;
  ${FlexCenter}

  a {
    padding: 0.5rem 0;
  }
`;

export const MainLink = styled.div`
  flex: 7;
  ${FlexCenter}
`;
