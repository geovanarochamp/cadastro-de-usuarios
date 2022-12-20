import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./containers/Home"
import Users from "./containers/Users"
import GlobalStyle from "./globalStyles"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Users />
  </React.StrictMode>
)
