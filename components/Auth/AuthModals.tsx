import { Toaster } from 'react-hot-toast';
import Login from './Login';
import SignUp from './SignUp';

export default function AuthModals({ openSignup, openLogin, isLoginOpen, isSignupOpen, setIsLoginOpen, setIsSignupOpen }) {

  const closeLogin = () => setIsLoginOpen(false);
  const closeSignup = () => setIsSignupOpen(false);

  if (!isLoginOpen && !isSignupOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="fixed inset-0 bg-black/60 bg-opacity-50 z-50 flex items-center justify-center p-4">
        {/* Login Modal */}
        {isLoginOpen && (
          <Login closeLogin={closeLogin} openSignup={openSignup} />
        )}

        {/* Signup Modal */}
        {isSignupOpen && (
          <SignUp closeSignup={closeSignup} openLogin={openLogin} />
        )}
      </div>
    </>
  );
}