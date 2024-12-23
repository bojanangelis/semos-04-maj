import FromComponent from "./components/FromComponent"
import { useSelector } from "react-redux"
import User from "./components/User"
import "./App.css"

function App() {
  const firstName = useSelector((state) => state.form.firstName)
  const lastName = useSelector((state) => state.form.lastName)
  return (
    <>
      <header>
        User:
        <h4>
          {firstName} {lastName}
        </h4>
      </header>

      <User />

      <FromComponent />
    </>
  )
}

export default App
