import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRouter: React.FC = () => {
  const auth = false;

  return auth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
