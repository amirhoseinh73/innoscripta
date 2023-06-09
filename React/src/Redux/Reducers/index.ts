import authReducer from "./auth"
import { combineReducers } from "redux"
import { ReduxReducers } from "../../@types/redux"
import articleNytReducer from "./articleNYT"

type CombineReduxReducers = {
  [key in keyof ReduxReducers]: any
}

const allReducersList: CombineReduxReducers = {
  articleNYT: articleNytReducer,
  userInfo: authReducer,
}

export const allReducers = combineReducers(allReducersList)
