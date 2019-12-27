import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import React from "react";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
