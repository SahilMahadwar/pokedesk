import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="bod">
      <h1 className="main-headingg">PokeDesk</h1>
      <div className="align">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
