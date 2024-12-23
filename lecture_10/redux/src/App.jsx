import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./app/counterSlice"
import { handleChangeFirstName } from "./app/createUserSlice"

function App() {
  const count = useSelector((state) => state.counter.value)
  const firstName = useSelector((state) => state.createUser.firstName)

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <button onClick={() => dispatch(decrement())}> count - </button>
      </div>
      <input
        value={firstName}
        onChange={(e) => dispatch(handleChangeFirstName(e.target.value))}
        placeholder="FirstName"
        type="text"
      />
      <input placeholder="LastName" type="text" />
      <input placeholder="email" type="email" />
      <input placeholder="password" type="password" />
    </>
  )
}

export default App
