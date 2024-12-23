import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { handlePassword, handleUsername } from "./app/userSlice"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const username = useSelector((store) => store.user.username)
  const password = useSelector((store) => store.user.password)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div>
      <input
        value={username}
        onChange={(e) => dispatch(handleUsername(e.target.value))}
        type="text"
      />
      <input
        value={password}
        onChange={(e) => dispatch(handlePassword(e.target.value))}
        type="password"
      />
      <button onClick={() => navigate("/")}>Submit</button>
    </div>
  )
}

export default SignIn
