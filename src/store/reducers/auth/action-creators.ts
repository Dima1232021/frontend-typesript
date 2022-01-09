import { AppDispatch } from "../../index";
import { IUser } from "../../../models/IUser";
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserhAction,
} from "./types";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserhAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<IUser[]>("./users.json");
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(
              AuthActionCreators.setError("Не правильний логін або пароль")
            );
          }
          dispatch(AuthActionCreators.setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(AuthActionCreators.setError("Сталася помилка при логіні!"));
      }
    },
  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
  },
};
