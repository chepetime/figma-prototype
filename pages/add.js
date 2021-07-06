import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";

export default function Add() {
  return (
    <Page title="Add | Photo" showNavigation paddedTop>
      <Wrapper onlyX>
        <PageTitle>Add</PageTitle>
      </Wrapper>
    </Page>
  );
}
