import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";

const Routes = (): any => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
