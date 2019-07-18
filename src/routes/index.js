import React from "react";
import Insumos from "../components/Insumos";
import Home from "../components/layout/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/insumos" component={Insumos} />
      <Route exate path="/" component={Home} />
      <Route Redirect path="/insumos" component={Insumos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
