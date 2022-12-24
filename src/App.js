import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <Home />
    </div>
  );
}

export default App;
