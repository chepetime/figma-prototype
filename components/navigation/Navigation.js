import Link from "next/link";
import Image from "next/image";

import * as S from "./Navigation.styled";

import IconDiscover from "@/assets/icons/discover.svg";
import IconSearch from "@/assets/icons/search.svg";
import IconAdd from "@/assets/icons/add.svg";
import IconChats from "@/assets/icons/chat.svg";
import IconProfile from "@/assets/icons/profile.svg";

export default function Navigation() {
  return (
    <S.Navigation>
      <S.Container>
        <S.SimpleLink>
          <Link href="/discover">
            <a>
              <Image src={IconDiscover} alt="Got to Discover" />
            </a>
          </Link>
        </S.SimpleLink>
        <S.SimpleLink>
          <Link href="/search">
            <a>
              <Image src={IconSearch} alt="Got to Search" />
            </a>
          </Link>
        </S.SimpleLink>
        <S.MainLink>
          <Link href="/add">
            <a>
              <Image src={IconAdd} alt="Got to Add" />
            </a>
          </Link>
        </S.MainLink>
        <S.SimpleLink>
          <Link href="/chats">
            <a>
              <Image src={IconChats} alt="Got to Chats" />
            </a>
          </Link>
        </S.SimpleLink>
        <S.SimpleLink>
          <Link href="/profile">
            <a>
              <Image src={IconProfile} alt="Got to Profile" />
            </a>
          </Link>
        </S.SimpleLink>
      </S.Container>
    </S.Navigation>
  );
}
