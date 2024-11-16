import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHome({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <>
      {/* User Navbar */}
      <nav className="bg-red-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-6">
              <Link to="/user-home" className="text-white hover:text-gray-200">
                User Home
              </Link>
              <Link to="/report-incident" className="text-white hover:text-gray-200">
                Report a New Incident
              </Link>
              <span className="text-white">{user?.username || "User"}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-white hover:bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-6 max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}!</h1>
        <p className="text-lg">Here you can manage your incidents or report new ones.</p>
      </div>
    </>
  );
}

export default UserHome;
