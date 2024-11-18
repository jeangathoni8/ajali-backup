import React from "react";
import Navbar from "./components/Navbar";
import Incidents from "./components/Incidents";
import { Route, Routes } from "react-router-dom";
import ManageIncidents from "./components/ManageIncidents";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Incidents />} />
        <Route path="/manage-incidents" element={<ManageIncidents />} />
      </Routes>
    </>
  );
}

export default App;
