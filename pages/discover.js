import Image from "next/image";
import { usePosts } from "@/hooks/usePosts";

import { Carousel } from "react-responsive-carousel";

import Page from "@/components/page/Page";
import { PageTitle } from "@/components/page/Page.styled";
import { Subtitle } from "@/components/ui/Titles.styled";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";

import PhotoPreview from "@/components/photo/PhotoPreview";
import { Masonry, MasonryChild } from "@/components/photo/Masonry.styled";

function FetchPosts() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "An error has occurred";

  return (
    <>
      <Subtitle>What’s new today</Subtitle>
      <Carousel emulateTouch renderIndicator={false} showStatus={false}>
        {data.posts.all.map((image, index) => (
          <PhotoPreview key={`new-${index}`} {...image} />
        ))}
      </Carousel>
      <Subtitle>Browse all</Subtitle>
      <Masonry>
        {data.posts.all.map(({ picture, name }, index) => (
          <Image
            key={`masonrychild-${index}`}
            src={picture}
            alt={`${name}'s picture`}
            width="400"
            height="400"
          />
        ))}
      </Masonry>
    </>
  );
}

export default function Discover() {
  return (
    <Page title="Discover | Photo" showNavigation paddedTop>
      <Wrapper onlyX>
        <PageTitle>Discover</PageTitle>
        <FetchPosts />
      </Wrapper>
    </Page>
  );
}
