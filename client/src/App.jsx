import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Incidents from "./components/Incidents"
import Contact from "./components/Contact"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/incidents" element={<Incidents />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      
    </>
  )
}

export default App
