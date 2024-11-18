import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ajali.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
            <img src={Logo} alt="Ajali Logo" className="h-20 w-25" />
            </Link>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">
              Incidents
            </Link>
            <Link to="/manage-incidents" className="text-white hover:text-gray-200">
              Manage Incidents
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 pt-4 pb-3 space-y-2">
          <Link to="/" className="text-white hover:text-gray-200">
              Incidents
            </Link>
            <Link to="/manage-incidents" className="text-white hover:text-gray-200">
              Manage Incidents
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
