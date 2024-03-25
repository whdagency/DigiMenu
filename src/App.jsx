import { useState } from "react";
// import './App.css'
import { RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./router/index";
import Login from "./authentification/page";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Dashboard />} />
      </Routes>
    <Router/>
  );
}

export default App;
