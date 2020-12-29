import React from "react";
import ChatTile from "./Components/ChatTile";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ChatTile msgStatus="fa fa-check-circle" />
      <ChatTile />
      <ChatTile msgStatus="fa fa-check-circle" />
      <ChatTile msgStatus="fa fa-check-circle" />
      <ChatTile />
      <ChatTile />
    </div>
  );
}

export default App;
