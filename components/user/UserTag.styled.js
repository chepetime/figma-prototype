import styled, { css } from "styled-components";
import { up } from "styled-breakpoints";

export const UserTag = styled.div`
  display: flex;

  padding: 0.75rem 0;
`;

export const Avatar = styled.div`
  line-height: 0;
  border-radius: 100%;

  width: 1.75rem;
  height: 1.75rem;

  overflow: hidden;

  margin-right: 0.5rem;
  img {
    object-fit: cover;
  }
`;

export const Name = styled.p`
  margin: 0;

  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.15;

  color: #000000;
  text-align: left; ;
`;

export const Username = styled.p`
  margin: 0;

  font-size: 0.6875rem;
  line-height: 1.18;

  color: rgba(0, 0, 0, 0.8);
  text-align: left; ;
`;
