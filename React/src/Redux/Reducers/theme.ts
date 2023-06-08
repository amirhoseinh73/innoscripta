import { SwitchThemeAction } from "../../@types/redux"

const themeReducer = (state = false, action: SwitchThemeAction) => {
  switch (action.type) {
    case "IS_DARK":
      return true
    case "IS_LIGHT":
      return false
    default:
      return state
  }
}

export default themeReducer
