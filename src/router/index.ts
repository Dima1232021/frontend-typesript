import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRouter {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRouter[] = [
  { path: RouteNames.LOGIN, component: Login, exact: true },
];

export const privateRoutes: IRouter[] = [
  { path: RouteNames.EVENT, component: Event, exact: true },
];
