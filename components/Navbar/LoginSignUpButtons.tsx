import React from 'react'

const LoginSignUpButtons = ({ openLogin, openSignup }) => {

  return (
    <div className="flex items-center space-x-3">
      <button
        className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
        onClick={openLogin}
      >
        <span className='hidden sm:block'>Login</span>
      </button>
      <button
        onClick={openSignup}
        className="cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium"
      >
        Sign Up
      </button>
    </div>
  )
}

export default LoginSignUpButtons
