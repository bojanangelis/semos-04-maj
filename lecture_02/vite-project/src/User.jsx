import React from 'react'
import Avatar from './Avatar'
import Card from './Card'
import Profile from './Profile'

// destruction
const User = ({ profileObj, isVerified}) => {
// destruction on profile obj
  const { img, name, age } = profileObj
  

  return (
    <Card isVerified={isVerified}>
      <Avatar img={img} name={name} />
      {/* <Profile traktor="traktor" img={img} ime="test" /> */}
    {/* // isto kako diovov */}
      {/* <div style={{ bacskground: 'aqua', borderRadius: 20, padding: 10 }}> */}
      {/* vo ovoj kard jas pushtam dete komponenta vo slucajov avatar */}
      {/* <Avatar img={img} name={name} />
      <Avatar img={img} name={name} />
      <Avatar img={img} name={name} /> */}
      
      {/* <h2>AGE: {age}</h2> */}
      {/* </div> */}

     </Card>
    
  )
}

export default User