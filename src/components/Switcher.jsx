import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function Switcher() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact patch="" component={NotFound} />
    </Switch>
  );
}

export default Switcher;
