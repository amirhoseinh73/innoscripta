import React, { useEffect } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NotFound404 from "./pages/NotFound404"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { ReduxReducers } from "./@types/redux"
import Dashboard from "./pages/Dashboard"
import { PostData } from "./models/POST"
import { ResponseUserInfo } from "./@types/global"
import { getItem } from "./helpers/helper"
import { setUserInfo } from "./Redux/Actions/auth"
import { userInfoBody } from "./models/User"
import Logout from "./components/Logout"

function App() {
  const userInfo = useSelector((state: ReduxReducers) => state.userInfo)

  const validateUserInfo = userInfo && Object.keys(userInfo).length

  const dispatch = useDispatch()
  const token = getItem("token")

  const getUserInfo = async () => {
    try {
      const data = userInfoBody()
      const respond = (await PostData(data, true)) as ResponseUserInfo

      dispatch(setUserInfo(respond.data.me))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (validateUserInfo || !token) return

    getUserInfo()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound404 />,
      children: [
        // {
        //   path: "contact-us",
        //   element: <ContactUs />,
        // },
      ],
    },
    {
      path: "sign-in",
      element: validateUserInfo ? <Dashboard /> : <Login />,
    },
    {
      path: "sign-up",
      element: validateUserInfo ? <Dashboard /> : <Register />,
    },
    {
      path: "dashboard",
      element: validateUserInfo ? <Dashboard /> : <Login />,
    },
    {
      path: "logout",
      element: validateUserInfo ? <Logout /> : <Login />,
    },
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
