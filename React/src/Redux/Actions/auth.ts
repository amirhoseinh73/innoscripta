import { UserInfo } from "../../@types/global"

export const setUserInfo = function (userInfo: UserInfo | null) {
  return {
    type: "SET_USER_INFO",
    payload: userInfo,
  }
}
