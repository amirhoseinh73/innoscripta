import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import NotFound404 from "./pages/NotFound404.tsx"
import Login from "./pages/Login.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <Login />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
