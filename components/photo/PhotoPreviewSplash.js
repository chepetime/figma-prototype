import Image from "next/image";
import UserTag from "@/components/user/UserTag";
import { Wrapper } from "@/components/wrapper/Wrapper.styled";
import * as S from "./PhotoPreviewSplash.styled";

export default function PhotoPreviewSplash({ picture = "", user = "" }) {
  return (
    <S.PhotoPreviewSplash background={picture}>
      <S.Background>
        <Image
          alt={`Picture from user`}
          src={picture}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </S.Background>

      <S.Content>
        <Wrapper>
          <UserTag
            avatar={"http://p-hold.com/60/60"}
            name="Pawel Czerwinski"
            username="@pawel_czerwinski"
          />
        </Wrapper>
      </S.Content>
    </S.PhotoPreviewSplash>
  );
}
