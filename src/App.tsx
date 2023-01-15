import React from "react"
import { MemoryRouter as Router, Routes, Route } from "react-router-dom"
import { createRoot } from "react-dom/client"
import "./App.css"
import Detail from "./pages/Detail"
import Home from "./pages/Home"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  </Router>
)
