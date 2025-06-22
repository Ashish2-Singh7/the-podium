import React from 'react'
import { useAuth } from '../AuthContext';
import { Camera, Eye, EyeClosed, Globe, ImageIcon, Lock, Mail, User, X } from 'lucide-react';

const SignUp = () => {
  const { signupData, handleSignupChange, handleSignupSubmit, closeSignup, openLogin, showPassword, setShowPassword, handleFileChange, coverImagePreview, profilePicPreview } = useAuth();
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Join The Podium</h2>
        <button
          onClick={closeSignup}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Create your account and start sharing your stories with the world.
        </p>

        <form onSubmit={handleSignupSubmit} className="space-y-4">
          {/* New Image Upload Section */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-8">
            {/* Cover Image Preview */}
            <img
              src={coverImagePreview || "/coverImg.png"}
              alt="Cover Preview"
              className="w-full h-full object-cover"
            />
            {/* Cover Image Upload Button */}
            <label htmlFor="coverImageInput" className="absolute top-2 right-2 p-2 bg-gray-800 bg-opacity-70 text-white rounded-full cursor-pointer hover:bg-opacity-90 transition-colors">
              <ImageIcon className="w-5 h-5" />
              <input
                type="file"
                id="coverImageInput"
                name="coverImage"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*" // Restrict to image files
              />
            </label>

            {/* Profile Picture Container */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-300 dark:bg-gray-600 overflow-hidden shadow-lg">
              {/* Profile Picture Preview */}
              <img
                src={profilePicPreview || "/profile.png"}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
              {/* Profile Picture Upload Button */}
              <label htmlFor="profilePicInput" className="absolute bottom-5 right-1 p-1 bg-gray-800 bg-opacity-70 text-white rounded-full cursor-pointer hover:bg-opacity-90 transition-colors">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  id="profilePicInput"
                  name="profilePic"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*" // Restrict to image files
                />
              </label>
            </div>
          </div>
          {/* End Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="@username"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Create password"
                />
                <button
                  onClick={() => { setShowPassword(!showPassword) }}
                >
                  {!showPassword ? <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> : <EyeClosed className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm_password"
                  value={signupData.confirm_password}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Confirm password"
                />
                <button
                  onClick={() => { setShowPassword(!showPassword) }}
                >
                  {!showPassword ? <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> : <EyeClosed className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={signupData.bio}
              onChange={handleSignupChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  name="websiteAdd"
                  value={signupData.websiteAdd}
                  onChange={handleSignupChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Social Handles
                <span className="relative inline-block mt-2 ml-2 group">
                  <span className="cursor-pointer text-[10px] text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    i
                  </span>
                  <div
                    className="absolute z-10 p-2 text-[10px] bg-gray-700 dark:bg-gray-800 text-white rounded-md shadow-lg
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       -mt-12 left-1/2 -translate-x-1/2 min-w-max"
                  >
                    Order should be follow: @twitter, @instagram, @github, @linkedin
                  </div>
                </span>
              </label>
              <input
                type="text"
                name="socialHandles"
                value={signupData.socialHandles}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="@twitter, @instagram"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" required className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500" />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              I agree to the{' '}
              <button type="button" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
                Privacy Policy
              </button>
            </span>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <button
              onClick={openLogin}
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
