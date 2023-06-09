import ReactDOM from "react-dom/client"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { allReducers } from "./Redux/Reducers"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const store = configureStore({ reducer: allReducers })

root.render(
  <Provider store={store}>
    <div className="container mx-auto">
      <App />
    </div>
  </Provider>
)
