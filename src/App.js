import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AllPosts } from "./components/AllPosts";
import { CreateNewPost } from "./components/CreateNewPost";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <BrowserRouter>
      <section id="header-container">
        <div id="nav-bar">
          <Link to="/home">HOME</Link>
          <Link to="/posts">ALL POSTS</Link>
          <Link to="/addnewpost">NEW POST</Link>
          <div className="App">
            {currentForm === "login" ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )}
          </div>
        </div>
      </section>
      <div id="container">
        <Routes>
          <Route exact path="/posts" element={<AllPosts />}></Route>
          <Route exact path="/addnewpost" element={<CreateNewPost />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
