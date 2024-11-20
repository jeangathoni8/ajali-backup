import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Mail, Lock, LogIn, UserCircle, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import axios from 'axios';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);  // Local loading state
  const [error, setError] = useState(null);  // Local error state
  
  const navigate = useNavigate();

  // Function to handle API call for registration
  const handleRegister = async () => {
    try {
      console.log('Registering with:', { username, email, password });  // Debugging log
      await axios.post('http://127.0.0.1:5000/users', 
        { username, email, password },
        { withCredentials: true }  // Include cookies in the request
      );

      // Assuming registration was successful, navigate to login page
      setIsRegistering(false);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during registration');
    }
  };

  // Function to handle API call for login
  const handleLogin = async () => {
    try {
      console.log('Logging in with:', { email, password });  // Debugging log
      await axios.post('http://127.0.0.1:5000/login', 
        { email, password },  // Use email instead of username
        { withCredentials: true }  // Include cookies in the request
      );

      // Assuming login was successful, navigate to the profile page
      navigate('/profile');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading

    if (isRegistering) {
      await handleRegister();
    } else {
      await handleLogin();
    }

    setLoading(false);  // Stop loading
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-primary-600" />
          </div>
          
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
            {isRegistering ? 'Create Account' : 'Sign in to Ajali!'}
          </h2>

          {error && (
            <div className="bg-primary-50 border border-primary-200 text-primary-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <motion.form
            key={isRegistering ? 'register' : 'login'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {isRegistering && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <UserCircle className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
                <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
                <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                size="lg"
                className="w-full"
              >
                <LogIn className="h-5 w-5 mr-2" />
                {loading ? 'Please wait...' : isRegistering ? 'Create Account' : 'Sign in'}
              </Button>
            </div>
          </motion.form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-sm text-primary-600 hover:text-primary-500"
            >
              {isRegistering
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;