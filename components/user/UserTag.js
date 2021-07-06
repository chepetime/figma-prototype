import Image from "next/image";

import * as S from "./UserTag.styled";

export default function UserTag({ avatar = "", name = "", username = "" }) {
  return (
    <S.UserTag>
      <S.Avatar>
        <Image src={avatar} alt={username} width="28" height="28" />
      </S.Avatar>
      <div>
        <S.Name>{name}</S.Name>
        <S.Username>{username}</S.Username>
      </div>
    </S.UserTag>
  );
}
