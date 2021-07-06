import Image from "next/image";
import PhotoPreviewSplash from "@/components/photo/PhotoPreviewSplash";
import * as S from "./WelcomeSplash.styled";
import brand_logo from "@/assets/images/brand_logo.png";
import splashScreen from "@/assets/images/splash_1.jpg";

export default function WelcomeSplash() {
  return (
    <S.WelcomeSplash>
      <S.Logo>
        <Image src={brand_logo} alt={"Photo Logo"} />
      </S.Logo>
      <PhotoPreviewSplash picture={splashScreen} />
    </S.WelcomeSplash>
  );
}
