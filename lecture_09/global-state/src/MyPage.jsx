import React, { useContext } from "react";
import { ThemeContext } from "./App";

const MyPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: `${theme === "light" ? "white" : "black"}`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => toggleTheme()}>Light mode</button>
    </div>
  );
};

export default MyPage;
