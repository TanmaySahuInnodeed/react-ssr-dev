import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App({ name }) {
  return (
    <div className="App">
      <h1>Server Side Rendering (SSR)</h1>
      <h3>This page has been rendered on server</h3>
      <span id="name">My name is "{name}"</span>
    </div>
  );
}

export default App;
