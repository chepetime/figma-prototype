import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import Navigation from "@/components/navigation/Navigation";

import * as S from "./Page.styled";

import GoBack from "@/assets/icons/icon-navigation-back.svg";

export default function Page({
  title = "Photo",
  description = "",
  canonical = "",
  goBack = false,
  goNext = false,
  showNavigation = false,
  children,
  ...props
}) {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  const hasSteppedNavigation = goBack || goNext;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} />
      <S.Page {...props}>
        {hasSteppedNavigation && (
          <S.TopNavigation>
            {goBack && (
              <S.GoBackButton onClick={() => handleGoBack()} type="button">
                <Image src={GoBack} alt="Go Back" />
              </S.GoBackButton>
            )}
          </S.TopNavigation>
        )}
        <S.Content showNavigation {...props}>
          {children}
        </S.Content>
        {showNavigation && <Navigation />}
      </S.Page>
    </>
  );
}
