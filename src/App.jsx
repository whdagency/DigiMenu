import { useState } from "react";
// import './App.css'
import { RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./router/index";
import Login from "./authentification/page";
import Dashboard from "./pages/dashboard/page";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
