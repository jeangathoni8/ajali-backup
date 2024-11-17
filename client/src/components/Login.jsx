import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ setUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Send form data as JSON
      });
  
      // Parse JSON response
      const data = await response.json();
  
      if (response.ok) {
        // Store user details in localStorage and set state
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
  
        // Show success notification
        toast.success(data.message);
  
        // Redirect to user home page after a short delay to ensure state is updated
        setTimeout(() => {
          navigate("/user-home");
        }, 2000);
      } else {
        // Show error message from server
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
  
      // Handle unexpected errors
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />
        <button
          type="submit"
          className="bg-red-700 text-white py-2 px-4 w-full hover:bg-red-800"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-700 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
