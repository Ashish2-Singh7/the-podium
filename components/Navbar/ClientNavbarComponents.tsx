"use client";
import React, { useState } from 'react'
import MobileMenuButton from './MobileMenuButton'
import MobileNavigation from './MobileNavigation'
import AuthModals from '../Auth/AuthModals'
import LoginSignUpButtons from './LoginSignUpButtons';
import LogoutUserButtons from './LogoutUserButtons';
import toast from 'react-hot-toast';

const ClientNavbarComponents = ({ jwt, user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const openLogin = () => {
        setIsLoginOpen(true);
        setIsSignupOpen(false);
    };

    const openSignup = () => {
        setIsSignupOpen(true);
        setIsLoginOpen(false);
    };

    const handleLogout = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
                method: 'POST'
            })
            const data = await res.json();
            toast.success(data.message);
            window.location.reload();

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
        // Add logout logic here
    };


    return (
        <>
            <div className="hidden md:flex items-center space-x-4">

                {!jwt ? (
                    <LoginSignUpButtons openLogin={openLogin} openSignup={openSignup} />
                ) : (
                    <LogoutUserButtons user={user} handleLogout={handleLogout} />
                )}
            </div>
            {/* Mobile menu button */}
            <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {/* Mobile Navigation */}
            < MobileNavigation jwt={jwt} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} handleLogout={handleLogout} openLogin={openLogin} openSignup={openSignup} />
            {/* Auth Modals */}
            < AuthModals openSignup={openSignup} setIsSignupOpen={setIsSignupOpen} setIsLoginOpen={setIsLoginOpen} openLogin={openLogin} isSignupOpen={isSignupOpen} isLoginOpen={isLoginOpen} />
        </>
    )
}

export default ClientNavbarComponents
