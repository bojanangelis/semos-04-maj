import React, { useEffect, useState } from 'react'

const ChatRoom = ({ roomId, chats }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const x = chats.filter((chat) => chat.roomId === roomId)
    setData(x)
  }, [roomId])
  return (
    <div>
      <h2>{data?.[0]?.roomId}</h2>
      <h2>{data?.[0]?.title}</h2>
    </div>
  )
}

export default ChatRoom
