import React from "react";
import ChatList from "./Components/ChatList";

import "./App.css";
import ChatScreen from "./Components/ChatScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import LoginPage from "./LoginPage";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <LoginPage />
      ) : (
        <BrowserRouter>
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
      )}
      <div></div>
    </div>
  );
}

export default App;
