"use client";
import { db } from "@/config/firebase";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

function Chat({ chatId }) {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session.user?.email,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="chat-text mt-10 text-center text-black">
            Напишите что-нибудь, чтобы начать!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-black animate-bounce" />
        </>
      )}
      {messages?.docs?.map((message) => (
        <Message key={message.id} message={message?.data()} />
      ))}
    </div>
  );
}

export default Chat;
