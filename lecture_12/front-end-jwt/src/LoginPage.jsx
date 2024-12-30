import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginData = await fetch("http://localhost:8004/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await loginData?.json();
      if (data) {
        localStorage.setItem("token", data?.token);
        if (data?.message === "Login successfully") {
          navigate("/");
        }
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />

      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default LoginPage;
