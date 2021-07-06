import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";

export default function Profile() {
  return (
    <Page title="Profile | Photo" showNavigation paddedTop>
      <Wrapper onlyX>
        <PageTitle>Profile</PageTitle>
      </Wrapper>
    </Page>
  );
}
