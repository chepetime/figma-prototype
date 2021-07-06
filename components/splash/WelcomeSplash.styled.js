import styled, { css } from "styled-components";

export const WelcomeSplash = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
  z-index: 200;
`;
