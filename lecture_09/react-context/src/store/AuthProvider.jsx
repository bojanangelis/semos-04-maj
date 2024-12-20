import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const getUserByLocalStorage = localStorage.getItem("username");

  useEffect(() => {
    if (getUserByLocalStorage) {
      setUser(getUserByLocalStorage);
    }
  }, [getUserByLocalStorage]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
