import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import React from "react";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
    </Switch>
  </BrowserRouter>
);

export default Router;
