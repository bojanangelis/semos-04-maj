import React from 'react'

const SideBar = ({ roomId, setRoomId }) => {
  return (
    <div>
      <h2>Choose your Channels⬇️ </h2>
      <div style={{ display: 'flex', width: '25%', flexDirection: 'column' }}>
        <button onClick={() => setRoomId('General')}>General {roomId === 'General' && '✅'}</button>
        <button onClick={() => setRoomId('Learning React')}>
          Learning React {roomId === 'Learning React' && '✅'}
        </button>
        <button onClick={() => setRoomId('Random')}>Random {roomId === 'Random' && '✅'}</button>
      </div>
    </div>
  )
}

export default SideBar
