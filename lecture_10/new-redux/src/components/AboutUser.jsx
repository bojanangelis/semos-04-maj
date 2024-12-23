import React from "react"
import { useSelector } from "react-redux"

const AboutUser = () => {
  const firstName = useSelector((state) => state.form.firstName)
  const lastName = useSelector((state) => state.form.lastName)
  const email = useSelector((state) => state.form.email)
  const password = useSelector((state) => state.form.password)
  return (
    <div>
      AboutUser:
      <h4>
        {firstName} {lastName}
      </h4>
    </div>
  )
}

export default AboutUser
