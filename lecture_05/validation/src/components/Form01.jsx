import React, { useState } from 'react'

const Form01 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleInputFirstName = (value) => {
    setFirstName(value)
  }

  // event.stopPropagation()

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type='text'
        value={firstName}
        placeholder='First Name'
        onChange={(event) => handleInputFirstName(event.target.value)}
      />
      <input
        type='text'
        value={lastName}
        placeholder='Last Name'
        onChange={(event) => setLastName(event.target.value)}
      />
      <button
      //   onClick={(event) => event.preventDefault()}
      >
        Submit
      </button>
    </form>
  )
}

export default Form01
