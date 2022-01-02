import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import LoadingPage from "../pages/LoadingPage";
import Projects from "../pages/Projects";

function Switcher() {
  return (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route exact path="/loading" component={LoadingPage} />
      <Route exact path="/" component={Home} />
      <Route exact patch="" component={NotFoundPage} />
    </Switch>
  );
}

export default Switcher;
