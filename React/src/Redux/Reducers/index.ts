import authReducer from "./auth"
import { combineReducers } from "redux"
import themeReducer from "./theme"
import { ReduxReducers } from "../../@types/redux"

type CombineReduxReducers = {
  [key in keyof ReduxReducers]: any
}

const allReducersList: CombineReduxReducers = {
  themeIsDark: themeReducer,
  userInfo: authReducer,
}

export const allReducers = combineReducers(allReducersList)
