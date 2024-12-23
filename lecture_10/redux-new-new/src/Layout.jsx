import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
  const username = useSelector((store) => store.user.username)
  const password = useSelector((store) => store.user.password)
  const navigate = useNavigate()

  useEffect(() => {
    if (!username || !password) {
      navigate("/sign-in")
    }
  }, [username, password])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout
