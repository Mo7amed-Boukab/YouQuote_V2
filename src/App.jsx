import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Index from "./pages/Index";
import UserContext from "./context/UserContext";

function App() {
  return (
    <UserContext>
      <Router>
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UserContext>
  );
}
export default App;
