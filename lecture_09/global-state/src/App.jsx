import { createContext, useState } from "react";
import "./App.css";
import MyPage from "./MyPage";

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  const [theme1, setTheme1] = useState("");

  const toggleTheme = () => {
    setTheme(() => (theme === "light" ? "black" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme1, theme1 }}>
      <MyPage />
    </ThemeContext.Provider>
  );
}

export default App;
