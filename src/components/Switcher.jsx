import React from "react";
import { Route, Switch } from "react-router-dom";

function Switcher() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact patch="" component={NotFound} />
    </Switch>
  );
}

export default Switcher;
