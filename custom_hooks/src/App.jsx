import { useState } from 'react'
import './App.css'
import FormComponent from './FormComponent'
import ChatRoom from './ChatRoom'
import SideBar from './SideBar'

function App() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [roomId, setRoomId] = useState('General')
  const [chats, setChats] = useState([
    { roomId: 'General', title: "🎉 You're looking at general channel", messages: [''] },
    { roomId: 'Learning React', title: '👋 Welcome to learning reactjs channel', messages: [''] },
    {
      roomId: 'Random',
      title: '🎉 Post your music here',
      messages: [
        {
          username: 'bojanangjeleski',
          timestamp: '21:28',
          value: 'Hello World',
        },
      ],
    },
  ])

  return (
    <div>
      {fullName.length < 2 ? (
        <FormComponent setUsername={setUsername} setFullName={setFullName} />
      ) : (
        <div>
          <h2>{username} </h2>
          <SideBar roomId={roomId} setRoomId={setRoomId} />
          <ChatRoom roomId={roomId} chats={chats} />
        </div>
      )}
    </div>
  )
}

export default App
