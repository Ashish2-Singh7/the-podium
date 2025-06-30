import React, { useState } from 'react'
import { X, Mail, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = ({ closeLogin, openSignup }) => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingLogin(true);
    console.log("testing client route function")
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        toast.error(`Login failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error during login:', error);
      toast.error('A network error occurred. Please try again.');
    } finally {
      setLoadingLogin(false);
    }

  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Welcome Back</h2>
        <button
          onClick={closeLogin}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sign in to your account to continue your journey with The Podium.
        </p>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <button type="button" className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loadingLogin}
            className={`w-full ${loadingLogin ? "bg-gray-600 text-gray-400" : "bg-blue-600 cursor-pointer text-white"}  px-6 py-4 rounded-lg hover:${loadingLogin ? "bg-gray-700 " : "bg-blue-700 "} transition-colors duration-200 font-medium flex items-center justify-center space-x-2`}
          >

            {loadingLogin && <div role="status" className='mr-3'>
              <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-700 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>}
            <span>{loadingLogin ? "Singing in..." : "Sign in"}</span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <button
              onClick={openSignup}
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
