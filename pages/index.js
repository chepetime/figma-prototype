/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

import Page from "@/components/page/Page";
import WelcomeSplash from "@/components/splash/WelcomeSplash";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";
import { ButtonLink } from "@/components/ui/Button.styled";
import { ActionDrawer } from "@/components/ui/ActionDrawer.styled";

export default function Home() {
  return (
    <Page title="Photo" fullHeight showNavigation={false}>
      <Wrapper fullHeight paddless>
        <WelcomeSplash />

        <ActionDrawer>
          <Link href="/login">
            <ButtonLink ghost>Log in</ButtonLink>
          </Link>
          <Link href="/register">
            <ButtonLink black>Register</ButtonLink>
          </Link>
        </ActionDrawer>
      </Wrapper>
    </Page>
  );
}
