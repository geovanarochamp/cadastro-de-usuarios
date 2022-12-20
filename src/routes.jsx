import React from "react"

import { Routes, Route } from "react-router-dom"

import Home from "./containers/Home"
import Users from "./containers/Users"

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default MyRoutes
