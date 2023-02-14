import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

function ChatPage({params: {id}}) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        {/* Chat */}
        <Chat chatId={id} />
        {/* ChatInput */}
        <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage