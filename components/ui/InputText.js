import { useFormContext } from "react-hook-form";

import * as S from "./InputText.styled";

export default function InputText({
  name,
  id,
  type = "text",
  label = false,
  errorMessage = "",
  ...props
}) {
  const { register, ...methods } = useFormContext();
  const hasError = methods.formState.errors[name]?.message || false;

  return (
    <S.InputContainer>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        name={name}
        id={id}
        type={type}
        {...register(name)}
        {...props}
        autoComplete="off"
        allow-1password="no"
      />
      {hasError && (
        <S.Errors>
          {hasError} {errorMessage}
        </S.Errors>
      )}
    </S.InputContainer>
  );
}
