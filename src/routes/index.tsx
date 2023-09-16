import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductList from "../pages/ProductList"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ProductList} />
      </Routes>
    </Router>
  )
}

export default AppRouter
