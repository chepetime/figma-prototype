import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";
import { ButtonLinkEmpty } from "@/components/ui/Button.styled";

import FormRegister from "@/components/auth/FormRegister";
import FormRegisterUsername from "@/components/auth/FormRegisterUsername";

const FORM_STEPS = ["step1", "step2"];

export default function Register() {
  const router = useRouter();
  const [formStep, setFormStep] = useState(FORM_STEPS[0]);

  function handleSuccessRegistration() {
    setFormStep(FORM_STEPS[1]);
  }

  function handleSuccessUsername() {
    router.push("/discover");
  }

  return (
    <Page title="Register | Photo" goBack={true}>
      <Wrapper onlyX>
        <PageTitle>Register</PageTitle>

        {formStep === FORM_STEPS[0] && (
          <FormRegister handleSuccess={() => handleSuccessRegistration()} />
        )}
        {formStep === FORM_STEPS[1] && (
          <FormRegisterUsername handleSuccess={() => handleSuccessUsername()} />
        )}

        <Link href="/login">
          <ButtonLinkEmpty>Already an user? Log in</ButtonLinkEmpty>
        </Link>
      </Wrapper>
    </Page>
  );
}
