import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    validateToken();
  }, [token]);

  return (
    <div>
      <Outlet />
    </div>
  );
};
