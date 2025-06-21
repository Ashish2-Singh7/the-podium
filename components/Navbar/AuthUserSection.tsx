"use client"
import React from 'react'
import LoginSignUpButtons from './LoginSignUpButtons'
import LogoutUserButtons from './LogoutUserButtons'
import { useAuth } from '../AuthContext'

const AuthUserSection = () => {
    const { useToken } = useAuth();
    return (
        <div className="hidden md:flex items-center space-x-4">

            {!useToken ? (
                <LoginSignUpButtons />
            ) : (
                <LogoutUserButtons />
            )}
        </div>
    )
}

export default AuthUserSection
