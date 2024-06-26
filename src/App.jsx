import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import TodaysBirthday from "./components/TodaysBirthday";
import FutureBirthday from "./components/FutureBirthdays";
import { useState } from "react";
import "./App.css";
function App() {
  const [loggedin, setLoggedin] = useState("no");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e) {
    setLoggedin("checking");
    console.log(username);
    console.log(password);
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    fetch("https://rangandale.pythonanywhere.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or password");
        }
        return response.json();
      })
      .then((data) => {
        setLoggedin("yes");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Invalid username or password");
        setLoggedin("no");
      });
  }
  if (loggedin === "yes") {
    return (
      <>
        <Header />
        <div className="container">
          <TodaysBirthday />
          <FutureBirthday />
        </div>
      </>
    );
  } else if (loggedin === "no") {
    return (
      <>
        <Header />
        <div className="Login container">
          <div className="login">
            <h3>Login</h3>
            <form>
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button onClick={handleLogin} className="LoginButton">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="Login container">
        <div className="login">
          <h3>Please Wait</h3>
        </div>
      </div>
    );
  }
}

export default App;
