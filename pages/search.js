import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";

export default function Search() {
  return (
    <Page title="Search | Photo" showNavigation paddedTop>
      <Wrapper onlyX>
        <PageTitle>Search</PageTitle>
      </Wrapper>
    </Page>
  );
}
