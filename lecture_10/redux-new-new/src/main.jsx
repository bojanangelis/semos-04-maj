import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout.jsx"
import SignIn from "./SignIn.jsx"
import { Provider } from "react-redux"
import { store } from "./app/store.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<App />} />
          </Route>

          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
