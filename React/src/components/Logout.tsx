import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ReduxReducers } from "../@types/redux"
import { PostData } from "../models/POST"
import { logoutUserBody } from "../models/User"
import { useNavigate } from "react-router-dom"
import { setUserInfo } from "../Redux/Actions/auth"

const Logout = function () {
  const userInfo = useSelector((state: ReduxReducers) => state.userInfo)

  const validateUserInfo = userInfo && Object.keys(userInfo).length

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutUser = async () => {
    try {
      const data = logoutUserBody()
      await PostData(data, true)

      dispatch(setUserInfo(null))
      return navigate("/")
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (!validateUserInfo) return

    logoutUser()
  }, [])

  return <></>
}

export default Logout
