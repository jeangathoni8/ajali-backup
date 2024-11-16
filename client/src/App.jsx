import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
      {!user ? (
        <Navbar />
      ) : (
        <UserHome user={user} onLogout={handleLogout} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route path="/register" element={<Register />} />
        {user && (
          <>
            <Route path="/user-home" element={<UserHome user={user} />} />
            <Route
              path="/report-incident"
              element={<ReportIncident user={user} />}
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
