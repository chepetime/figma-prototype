/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

import { useRouter } from "next/router";

import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";
import { ButtonLinkEmpty } from "@/components/ui/Button.styled";

import FormLogin from "@/components/auth/FormLogin";

export default function Login() {
  const router = useRouter();

  function handleSuccessLogin() {
    router.push("/discover");
  }

  return (
    <Page title="Login | Photo" goBack={true}>
      <Wrapper onlyX>
        <PageTitle>Login</PageTitle>

        <FormLogin handleSuccess={() => handleSuccessLogin()} />

        <Link href="/register">
          <ButtonLinkEmpty>Don`t have an account? Register</ButtonLinkEmpty>
        </Link>
      </Wrapper>
    </Page>
  );
}
