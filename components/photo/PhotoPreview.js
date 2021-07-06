import Image from "next/image";
import UserTag from "@/components/user/UserTag";

export default function ProtoPreview({
  picture = "",
  avatar = "",
  name = "",
  username = "",
}) {
  return (
    <div>
      <Image src={picture} alt={`${name}'s picture`} width="343" height="343" />
      <UserTag avatar={avatar} name={name} username={username} />
    </div>
  );
}
