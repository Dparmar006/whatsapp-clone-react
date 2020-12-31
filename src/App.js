import React from "react";
import ChatList from "./Components/ChatList";
import Header from "./Components/Header";
import "./App.css";
import ChatScreen from "./Components/ChatScreen";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ChatList />
        <ChatScreen />
      </main>
      <div></div>
    </div>
  );
}

export default App;
