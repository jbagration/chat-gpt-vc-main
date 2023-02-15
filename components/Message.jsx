import React from "react";

function Message({ message }) {
    const isChatGPT = message?.user?.name === "ChatGPT"
  return (
    <div className={`py-5 text-black ${isChatGPT && "bg-[#D9D9D9]"}`}>
      <div className="flex space-x-5 max-w-2xl mx-auto">
        <img src={message?.user?.avatar} alt="Avatar" className="rounded-lg h-8 w-8" />
        <p className="pt-1 text-sm ">{message?.text}</p>
      </div>
    </div>
  );
}

export default Message;
