import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UserHome from "./components/UserHome";
import ReportIncident from "./components/ReportIncident";
import Home from "./components/Home";
import Incidents from "./components/Incidents";
import Contact from "./components/Contact";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUser={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user-home"
          element={
            user ? <UserHome user={user} /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/report-incident"
          element={
            user ? <ReportIncident user={user} /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
}

export default App;
