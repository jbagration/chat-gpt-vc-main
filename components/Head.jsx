"use client";
import { db } from "@/config/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";

import ChatGPTLogo from "@/assets/images/chatgpt-logo.png";
import Image from "next/image";

function Head() {
  const { data: session } = useSession();
  const router = useRouter();

  const [chats, loading] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div>

      <div className="chat-page">

      <div className='logo-page'>
            <Image width={30} height={30} src={ChatGPTLogo} alt="logo" />
            <p >ChatGPT в России</p>
            </div>


      <div>
      {session && (
        <img
          onClick={() => {
            signOut();
            router.push("/");
          }}
          src={session?.user?.image}
          alt={session?.user?.name}
          className="head-profile-pic h-9 w-9 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
</div>

</div>
    </div>
  );
}

export default Head;
