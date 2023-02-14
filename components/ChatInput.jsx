"use client";

import { db } from "@/config/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useSWR from "swr";
import ModalSelection from "./ModalSelection";

function ChatInput({ chatId }) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // useSWR get model
  //   const model = "text-davinci-003";
  const { data: model } = useSWR("@model-selected", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e) => {
    e?.preventDefault();

    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");

    const message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email,
        name: session?.user?.name,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email,
        "chats",
        chatId,
        "messages"
      ),
      {
        ...message,
      }
    );

    const notification = toast.loading("ChatGPT думает...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatGPT ответил", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-[#fff] text-black-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Введите текст..."
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-black"
          disabled={!session}
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#ADC6AC] hover:opacity-50 text-black font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div className="md:hidden">
        {/* ModelSelection */}
        <ModalSelection />
      </div>
    </div>
  );
}

export default ChatInput;
