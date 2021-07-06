import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 0;
  margin-bottom: 1rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;

  color: #000000;
  width: 100%;

  height: 3.25rem;

  outline: none;

  background: #ffffff;
  border: solid 2px #000;
  box-sizing: border-box;

  padding-left: 1rem;

  background-color: #ffffff;
  &::-webkit-input-placeholder {
    color: grey;
  }

  &::-moz-placeholder {
    color: grey;
  }

  &::-ms-placeholder {
    color: grey;
  }

  &::placeholder {
    color: grey;
  }
`;

export const Errors = styled.div``;
