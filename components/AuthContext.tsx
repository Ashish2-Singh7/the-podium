"use client";
import { AuthProviderProps, contextProps, SignupDataType } from '@/types';
import { validateSignUpInputs } from '@/utils/validation';
import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';


const AuthContext = createContext<contextProps | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
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

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login data:', loginData);
        closeLogin();
    };

    const handleSignupSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateSignUpInputs(signupData)) {
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
            handleSignupChange,
            showPassword,
            setShowPassword,
            handleFileChange,
            coverImagePreview,
            setCoverImagePreview,
            profilePicPreview,
            setProfilePicPreview
        }}>
            {children}
        </AuthContext.Provider>
    );
};
