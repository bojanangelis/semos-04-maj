// rafce
// React Arrow Function Component Export
import React from 'react'
import './App.css'


const Avatar = (props) => {
  return (
    <div className='avatar'>
        <img src={props.img} />
        <h1>{props.name}</h1>
    </div>
  )
}

export default Avatar