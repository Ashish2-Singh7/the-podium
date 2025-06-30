import React, { useState } from 'react'
import { Camera, Eye, EyeClosed, Globe, ImageIcon, Lock, Mail, User, X } from 'lucide-react';
import { SignupDataType } from '@/types';
import toast from 'react-hot-toast';
import { validateSignUpInputs } from '@/utils/validation';

const SignUp = ({ closeSignup, openLogin }) => {

  const [signupData, setSignupData] = useState<SignupDataType>({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    bio: '',
    websiteAdd: '',
    socialHandles: '',
    profilePic: null,
    coverImage: null
  });
  
  const [profilePicPreview, setProfilePicPreview] = useState<string | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSignUpInputs(signupData)) {
      setLoadingSignup(true);
      const formData = new FormData();
      formData.append('email', signupData.email);
      formData.append('username', signupData.username);
      formData.append('password', signupData.password);
      formData.append('bio', signupData.bio);
      formData.append('websiteAdd', signupData.websiteAdd);
      formData.append('socialHandles', signupData.socialHandles);

      // Append File objects if they exist
      if (signupData.profilePic) {
        formData.append('profilePic', signupData.profilePic);
      }
      if (signupData.coverImage) {
        formData.append('coverImage', signupData.coverImage);
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          toast.success('Account created successfully!');
          const data = await response.json();
          // console.log('Signup successful:', data);
          // closeSignup();
          window.location.reload();
        } else {
          const errorData = await response.json();
          console.error('Signup failed:', errorData);
          toast.error(`Signup failed: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Network error during signup:', error);
        toast.error('A network error occurred. Please try again.');
      } finally {
        setLoadingSignup(false);
      }

    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSignupData(prevData => ({
          ...prevData,
          [name]: reader.result as string, // ✅ Store base64 string
        }));

        const fileUrl = URL.createObjectURL(file);
        if (name === "profilePic") {
          setProfilePicPreview(fileUrl);
        } else if (name === "coverImage") {
          setCoverImagePreview(fileUrl);
        }
      };

      reader.readAsDataURL(file); // ✅ Convert to base64
    } else {
      // If file is deselected or cleared
      setSignupData(prevData => ({
        ...prevData,
        [name]: '', // or null if you prefer
      }));

      if (name === "profilePic") {
        setProfilePicPreview(null);
      } else if (name === "coverImage") {
        setCoverImagePreview(null);
      }
    }
  };

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
            disabled={loadingSignup}
            className={`w-full ${loadingSignup ? "bg-gray-600 text-gray-400" : "bg-blue-600 cursor-pointer text-white"}  px-6 py-4 rounded-lg hover:${loadingSignup ? "bg-gray-700 " : "bg-blue-700 "} transition-colors duration-200 font-medium flex items-center justify-center space-x-2`}
          >

            {loadingSignup && <div role="status" className='mr-3'>
              <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-700 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>}
            <span>{loadingSignup ? "Creating..." : "Create Account"}</span>
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
