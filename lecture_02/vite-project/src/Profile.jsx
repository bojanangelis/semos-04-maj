import React from 'react'
//dete
const Profile = (props) => {
console.log('ova e profile i gledam shto imam vo props-->', props)
  return (
    <div>
            <p>{props.traktor}</p>
        <div className='avatar'>
            <img src={props.img} />
            <h1>{props.ime}</h1>
            <h1>Godini: {props.godini}</h1>
            <h1>{props?.isPrivate?.toString()}</h1>
        </div>
    </div>
  )
}

export default Profile