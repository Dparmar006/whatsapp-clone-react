import React from "react";
import ChatList from "./Components/ChatList";
import Header from "./Components/Header";
import "./App.css";
import ChatScreen from "./Components/ChatScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <ChatList />
          <Switch>
            <Route path="/room/:roomId">
              <ChatScreen />
            </Route>

            <Route path="/">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;
