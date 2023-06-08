import { UserInfo } from "./global"

export interface ReduxReducers {
  themeIsDark: boolean
  userInfo: null | UserInfo
}

export interface SwitchThemeAction {
  type: "IS_DARK" | "IS_LIGHT"
}

export interface AuthAction {
  type: "SET_USER_INFO"
  payload: UserInfo
}
