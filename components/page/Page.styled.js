import styled, { css } from "styled-components";

export const Page = styled.div`
  position: relative;
  z-index: 100;
  flex: 1;

  padding: 0;
  overflow: hidden;

  width: 375px;
  height: 812px;
  outline: solid 1px #000;

  background: #fff;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    `}
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0 1.5rem;
`;

export const GoBackButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const Content = styled.div`
  position: relative;
  z-index: 200;

  flex: 1;
  overflow: scroll;
  max-height: 100%;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      flex: 1;
      overflow: aut0;
      max-height: none;
    `}
  ${({ showNavigation }) =>
    showNavigation &&
    css`
      padding-bottom: 20vh;
    `}

  ${({ paddedTop }) =>
    paddedTop &&
    css`
      padding-top: 5rem;
    `}
`;

export const MainNavigation = styled.nav``;

export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 1.11;

  letter-spacing: -0.015em;
  margin: 0 0 1.75rem;
  color: #000000;
`;
