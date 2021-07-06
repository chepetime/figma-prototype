import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";

export default function Chats() {
  return (
    <Page title="Chats | Photo" showNavigation paddedTop>
      <Wrapper onlyX>
        <PageTitle>Chats</PageTitle>
      </Wrapper>
    </Page>
  );
}
