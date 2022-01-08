import React from "react";
import Authorization from "../pages/Authorization";
import CreateGame from "../pages/CreateGame";
import Event from "../pages/Event";
import Main from "../pages/Main";

export interface IRouter {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  AUTH = "/authorization",
  EVENT = "/",
  MAIN = "/main",
  CREATE_GAME = "/create_game",
}

export const authRoutes: IRouter[] = [
  { path: RouteNames.AUTH, component: Authorization, exact: false },
];

export const privateRoutes: IRouter[] = [
  { path: RouteNames.EVENT, component: Event, exact: true },
];

export const mainRoutes: IRouter[] = [
  { path: RouteNames.MAIN, component: Main, exact: false },
];
export const createGameRoutes: IRouter[] = [
  { path: RouteNames.CREATE_GAME, component: CreateGame, exact: false },
];
