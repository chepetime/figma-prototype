import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputText from "@/components/ui/InputText";
import { Button } from "@/components/ui/Button.styled";
import { schema, fields } from "./FormLogin.schema";

const FORM_STATES = ["idle", "waiting", "success", "error"];

export default function FormLogin({ handleSuccess = () => {} }) {
  const [formState, setFormState] = useState(FORM_STATES[0]);
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (payload) => {
    if (formState !== FORM_STATES[0]) return;
    setFormState(FORM_STATES[1]);

    try {
      let response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      response = response.json();
      setFormState(FORM_STATES[2]);
    } catch (error) {
      setFormState(FORM_STATES[3]);
    }

    handleSuccess();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputText {...fields.email} />
        <InputText {...fields.password} />
        <Button type="submit">Next</Button>
      </form>
    </FormProvider>
  );
}
