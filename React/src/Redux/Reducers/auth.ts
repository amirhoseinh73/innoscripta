import { UserInfo } from "../../@types/global"
import { AuthAction } from "../../@types/redux"

const authReducer = (state: UserInfo | null = null, action: AuthAction) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...action.payload }
    default:
      return { ...state }
  }
}

export default authReducer
