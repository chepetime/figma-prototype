import { css } from 'styled-components';

export const FlexCenter = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHover = (content, transitionProperties = ['all']) => {
  const transition = transitionProperties.map((tran) => `${tran} ease-in-out 300ms`).join(', ');

  return css`
    @media only screen and (hover: hover) {
      &:hover {
        ${content}
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      & {
        transition: ${transition};
      }
    }
  `;
};
