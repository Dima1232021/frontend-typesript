import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  authRoutes,
  createGameRoutes,
  mainRoutes,
  privateRoutes,
  RouteNames,
} from "../router";
import { useHistory } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: React.FC = () => {
  const router = useHistory();
  const { isAuth } = useTypedSelector((state) => state.auth);

  console.log("pathname:", router.location.pathname);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      {mainRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      {createGameRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {authRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      <Redirect to={RouteNames.AUTH} />
    </Switch>
  );
};

export default AppRouter;
