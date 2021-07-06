import styled, { css } from "styled-components";

const BaseButtonStyles = css`
  width: 100%;
  font-size: 13px;
  font-weight: 900;
  font-style: normal;
  line-height: 15px;

  display: flex;

  height: 3.25rem;

  cursor: pointer;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #fff;

  border: solid 2px #000;
  border-radius: 6px;
  background-color: #000;

  align-items: center;
  justify-content: center;

  ${({ ghost }) =>
    ghost &&
    css`
      color: #000;
      background-color: #fff;
    `}
`;

export const Button = styled.button`
  ${BaseButtonStyles}
`;

export const ButtonLink = styled.a`
  ${BaseButtonStyles}
`;

export const ButtonLinkEmpty = styled.a`
  ${BaseButtonStyles}
  color: #000;
  background-color: #fff;
  border-color: transparent;
`;
