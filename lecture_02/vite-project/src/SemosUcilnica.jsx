import React from 'react'

const SemosUcilnica = ({ children, prisuten }) => {

  return (
    <div>
      {/* ? kako if iii : else */}
        {prisuten ? children : null}
    </div>
  )
}

export default SemosUcilnica