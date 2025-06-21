'use client';

import { useAuth } from '../AuthContext';
import Login from './Login';
import SignUp from './SignUp';

export default function AuthModals() {

  const { isLoginOpen, isSignupOpen } = useAuth();

  if (!isLoginOpen && !isSignupOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 bg-opacity-50 z-50 flex items-center justify-center p-4">
        {/* Login Modal */}
        {isLoginOpen && (
          <Login />
        )}

        {/* Signup Modal */}
        {isSignupOpen && (
          <SignUp />
        )}
      </div>
    </>
  );
}