"use client";
import { db } from "@/config/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import ModalSelection from "./ModalSelection";
import NewChat from "./NewChat";

function SideBar() {
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
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New chat */}
          <NewChat />
          <div className="hidden md:inline">
            {/* modelSelection */}
            <ModalSelection />
          </div>
          {/* Map through ChatRows */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                Loading...
              </div>
            )}

            {chats?.docs?.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default SideBar;