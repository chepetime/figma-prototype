import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";

export default function Discover() {
  return (
    <Page title="Discover | Photo" showNavigation paddedTop>
      <Wrapper onlyX>
        <PageTitle>Discover</PageTitle>
      </Wrapper>
    </Page>
  );
}
