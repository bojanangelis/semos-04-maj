import React from 'react'

const Card = ({ children, isVerified }) => {
  console.log(isVerified)
  return (
    <div 
    style={{ background: 'aqua', borderRadius: 20, padding: 10 }}>
{isVerified === true ? (
  <img style={{width: 40, height: 40}} src='https://static.vecteezy.com/system/resources/thumbnails/047/309/930/small_2x/verified-badge-profile-icon-png.png' />
) : <div></div>}
        {children}
    </div>
  )
}

export default Card
