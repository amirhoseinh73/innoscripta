import { ResponseNYT } from "../../@types/global"

export const setArticleNYT = function (articles: ResponseNYT["response"]["docs"] | []) {
  return {
    type: "SET_ARTICLE_NYT",
    payload: articles,
  }
}
