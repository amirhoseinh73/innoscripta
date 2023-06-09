import { ResponseNYT, UserInfo } from "./global"

export interface ReduxReducers {
  articleNYT: [] | ResponseNYT["response"]["docs"]
  userInfo: null | UserInfo
}

export interface AuthAction {
  type: "SET_USER_INFO"
  payload: UserInfo
}

export interface ArticleNytAction {
  type: "SET_ARTICLE_NYT"
  payload: ResponseNYT["response"]["docs"]
}
