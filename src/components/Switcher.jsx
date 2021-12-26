import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

function Switcher() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact patch="" component={PageNotFound} />
    </Switch>
  );
}

export default Switcher;
