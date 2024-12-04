import React, { useState } from 'react'

const SignUP = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errorFirstName, setErrorFirstName] = useState(null)
  const [errorLastName, setErrorLastName] = useState(null)
  const [errorAge, setErrorAge] = useState(null)
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  console.log(errorFirstName)

  //   const validateFirstName = (value) => {
  //     if (value.length < 3) {
  //       setErrorFirstName('Invalid First Name')
  //       // sakam error
  //     }
  //   }
  const validateError = (value, setFunction, errorText) => {
    if (value.length < 3) {
      setFunction(errorText)
    } else {
      setFunction(null)
    }
  }

  const validateAge = () => {
    if (age < 18) {
      setErrorAge('User must be 18+')
    } else {
      setErrorAge(null)
    }
  }

  const validatePhoneNumber = () => {
    if (!Number(phoneNumber) > 0) {
      setErrorPhoneNumber('Invalid phone number')
    }
  }

  const validateEmail = () => {
    if (!email.includes('@')) {
      setErrorEmail('Invalid email')
    } else {
      setErrorEmail(null)
    }
  }

  const validatePassword = () => {
    if (password !== confirmPassword || (password.length < 1 && confirmPassword.length < 1)) {
      setErrorPassword('Invalid password')
    } else {
      setErrorPassword(null)
    }
  }
  const handleSubmit = () => {
    validateError(firstName, setErrorFirstName, 'Error message for the first name')
    validateError(lastName, setErrorLastName, 'Error message for the last name')
    validateAge()
    validatePhoneNumber()
    validateEmail()
    validatePassword()
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <input
          placeholder='First Name'
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errorFirstName}</p>
      </div>

      <div>
        <input
          placeholder='Last Name'
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errorLastName}</p>
      </div>

      <div>
        <input
          placeholder='Age'
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errorAge}</p>
      </div>

      <div>
        <input
          placeholder='Phone number'
          type='number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errorPhoneNumber}</p>
      </div>

      <div>
        <input
          placeholder='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errorEmail}</p>
      </div>

      <div>
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errorPassword}</p>
      </div>

      <button onClick={handleSubmit}>Sing up</button>
    </form>
  )
}

export default SignUP
