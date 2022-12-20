import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import GlobalStyle from "./globalStyles"
import Routes from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
