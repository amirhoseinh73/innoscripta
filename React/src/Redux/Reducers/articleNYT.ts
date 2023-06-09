import { ResponseNYT } from "../../@types/global"
import { ArticleNytAction } from "../../@types/redux"

const articleNytReducer = (
  state: ResponseNYT["response"]["docs"] | [] = [],
  action: ArticleNytAction
) => {
  switch (action.type) {
    case "SET_ARTICLE_NYT":
      return [...action.payload]
    default:
      return state
  }
}

export default articleNytReducer
