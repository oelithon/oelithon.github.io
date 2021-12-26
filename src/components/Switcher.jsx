import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import LoadingPage from "../pages/LoadingPage";

function Switcher() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={LoadingPage} />
      <Route exact patch="" component={NotFoundPage} />
    </Switch>
  );
}

export default Switcher;
