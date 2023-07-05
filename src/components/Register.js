import React, { useState } from "react";
import { registerUser } from "./ApiHandler";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // Create if statement for matching passwords

    const addNewUser = async () => {
      e.preventDefault();
      console.log(username + password);

      let userInfo = {
        userName: username,
        userPassword: password,
      };

      let registerResult = await registerUser(userInfo);
      if (registerResult?.data?.token) {
        localStorage.setItem("userName", username);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userToken", registerResult.data.token);
      }
    };
    addNewUser(); 
  };

  return (
    <div className="login-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
          id="username"
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
        <button>Create Account</button>
      </form>
      <div>Already have an account?</div>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Login here
      </button>
    </div>
  );
};
