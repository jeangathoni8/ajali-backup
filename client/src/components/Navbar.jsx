import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ajali.png";

function Navbar({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img src={Logo} alt="Ajali Logo" className="h-20 w-25" />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/incidents" className="text-white hover:text-gray-200">
              Incidents
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
            {user ? (
              <>
                <Link to="/user-home" className="text-white hover:text-gray-200">
                  User Home
                </Link>
                <button onClick={onLogout} className="text-white hover:text-gray-200">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="text-white hover:text-gray-200">
                  Register
                </Link>
                <Link to="/login" className="text-white hover:text-gray-200">
                  Login
                </Link>
              </>
            )}
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-2 space-y-2 bg-red-700">
          <Link to="/" className="text-white hover:text-gray-200 block">
            Home
          </Link>
          <Link to="/incidents" className="text-white hover:text-gray-200 block">
            Incidents
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200 block">
            Contact
          </Link>
          {user ? (
            <>
              <Link to="/user-home" className="text-white hover:text-gray-200 block">
                User Home
              </Link>
              <button onClick={onLogout} className="text-white hover:text-gray-200 block">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="text-white hover:text-gray-200 block">
                Register
              </Link>
              <Link to="/login" className="text-white hover:text-gray-200 block">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
