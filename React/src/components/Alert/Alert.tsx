import { AlertType } from "../../@types/global"
import AlertStyled from "./AlertStyled"

interface AlertInterface {
  type: AlertType
  message: string
}

const Alert = ({ type, message }: AlertInterface) => {
  return (
    <AlertStyled
      className="w-full py-4 px-6 font-medium text-sm rounded-lg text-color-dark-4 mb-4"
      type={type}>
      {message}
    </AlertStyled>
  )
}

export default Alert
