import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  handleEmail,
  handleFirstName,
  handleLastName,
  handlePassword,
} from "../app/formSlice"

const FromComponent = () => {
  const firstName = useSelector((state) => state.form.firstName)
  const lastName = useSelector((state) => state.form.lastName)
  const email = useSelector((state) => state.form.email)
  const password = useSelector((state) => state.form.password)

  // use dispatch e kako pishtol koi puka do nekoja funkcija
  const dispatch = useDispatch()

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={firstName}
        onChange={(e) => dispatch(handleFirstName(e.target.value))}
        type="text"
      />
      <input
        value={lastName}
        onChange={(e) => dispatch(handleLastName(e.target.value))}
        type="text"
      />
      <input
        value={email}
        onChange={(e) => dispatch(handleEmail(e.target.value))}
        type="text"
      />
      <input
        value={password}
        onChange={(e) => dispatch(handlePassword(e.target.value))}
        type="text"
      />
    </form>
  )
}

export default FromComponent
