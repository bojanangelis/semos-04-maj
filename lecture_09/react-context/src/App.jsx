import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContext } from "./store/ThemeProvider";
import { AuthContext } from "./store/AuthProvider";
import Form from "./Form";
import { FormContext } from "./store/FormProvider";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const { step, handleNextStep, handlePreviousStep } = useContext(FormContext);
  return (
    <>
      {user}
      <button onClick={() => toggleTheme()}>{theme}</button>

      <Form />

      <button onClick={() => handleNextStep()}>setNext</button>
      <h4>Step: {step}</h4>
      <button onClick={() => handlePreviousStep()}>setPrevious</button>
    </>
  );
}

export default App;
