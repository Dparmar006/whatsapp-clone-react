import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ChatScreen from "./Components/ChatScreen";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/chat" component={ChatScreen} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
