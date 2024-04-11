import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import TodaysBirthday from "./components/TodaysBirthday";
import FutureBirthday from "./components/FutureBirthdays";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <TodaysBirthday />
        <FutureBirthday />
      </div>
    </>
  );
}

export default App;
