"use client";
import React, { createContext, useContext, useState } from 'react';

type contextProps = {
    isMenuOpen: boolean;
    isLoginOpen: boolean;
    isSignupOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
    useToken: boolean;
    handleLogout: () => void;
    openLogin: () => void;
    openSignup: () => void;
    closeLogin: () => void;
    closeSignup: () => void;
    loginData: {
        email: string;
        password: string;
    };
    setLoginData: React.Dispatch<React.SetStateAction<{
        email: string;
        password: string;
    }>>;
    signupData: {
        email: string;
        username: string;
        password: string;
        confirm_password: string;
        bio: string;
        websiteAdd: string;
        socialHandles: string;
        profilePic: string;
        coverImage: string;
    };
    setSignupData: React.Dispatch<React.SetStateAction<{
        email: string;
        username: string;
        password: string;
        confirm_password: string;
        bio: string;
        websiteAdd: string;
        socialHandles: string;
        profilePic: string;
        coverImage: string;
    }>>;
    handleLoginSubmit: (e: React.FormEvent) => void;
    handleSignupSubmit: (e: React.FormEvent) => void;
    handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSignupChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};


const AuthContext = createContext<contextProps | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: ThemeProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [signupData, setSignupData] = useState({
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        bio: '',
        websiteAdd: '',
        socialHandles: '',
        profilePic: '',
        coverImage: ''
    });

    // Hardcoded token for now
    const useToken = false;

    // const { theme, setTheme } = useTheme();

    const handleLogout = () => {
        console.log('Logging out...');
        // Add logout logic here
    };

    const openLogin = () => {
        setIsLoginOpen(true);
        setIsSignupOpen(false);
    };

    const openSignup = () => {
        setIsSignupOpen(true);
        setIsLoginOpen(false);
    };

    const closeLogin = () => setIsLoginOpen(false);
    const closeSignup = () => setIsSignupOpen(false);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login data:', loginData);
        closeLogin();
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signup data:', signupData);
        closeSignup();
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <AuthContext.Provider value={{
            isMenuOpen,
            isLoginOpen,
            isSignupOpen,
            setIsMenuOpen,
            setIsLoginOpen,
            setIsSignupOpen,
            useToken,
            handleLogout,
            openLogin,
            openSignup,
            closeLogin,
            closeSignup,
            loginData,
            setLoginData,
            signupData,
            setSignupData,
            handleLoginSubmit,
            handleSignupSubmit,
            handleLoginChange,
            handleSignupChange
        }}>
            {children}
        </AuthContext.Provider>
    );
};
