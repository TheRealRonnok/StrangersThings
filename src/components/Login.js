import React, { useState } from "react";
import { userLogin } from "./ApiHandler";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const logUserIn = async () => {
      e.preventDefault();
      console.log(username + " " + password);

      let userInfo = {
        userName: username,
        userPassword: password,
      };

      let loginResult = await userLogin(userInfo);
      if (loginResult?.data?.token) {
        localStorage.setItem("userName", username);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userToken", loginResult.data.token);
      }
    };
    logUserIn();
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
          id="userame"
          name="username"
        />
        <label htmlFor="password">Enter Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button>Log In</button>
      </form>
      <div>Don't have an account?</div>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Register now
      </button>
    </div>
  );
};
