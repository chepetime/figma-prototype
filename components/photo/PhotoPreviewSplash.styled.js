import styled, { css } from "styled-components";
import { up } from "styled-breakpoints";

export const PhotoPreviewSplash = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const Content = styled.div`
  position: relative;
  z-index: 200;
`;
