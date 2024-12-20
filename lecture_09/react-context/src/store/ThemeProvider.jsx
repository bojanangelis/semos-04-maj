import React, { createContext, useState } from "react";

// ovoj create context go kreira globalniot state
export const ThemeContext = createContext();

// nie odlucuvame shto sakame da imame vnatre
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
