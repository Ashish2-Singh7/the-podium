// Define the shape of signupData, specifically for file types
export interface SignupDataType {
    email: string;
    username: string;
    password: string;
    confirm_password: string;
    bio: string;
    websiteAdd: string;
    socialHandles: string; // Assuming this is a comma-separated string for now
    profilePic: File | null; // Changed to File | null
    coverImage: File | null; // Changed to File | null
}

export type contextProps = {
    isMenuOpen: boolean;
    isLoginOpen: boolean;
    isSignupOpen: boolean;
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
    useToken: boolean;
    handleLogout: () => void;
    openLogin: () => void;
    openSignup: () => void;
    closeLogin: () => void;
    closeSignup: () => void;
    // handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // No longer passed directly if integrated
    loginData: {
        email: string;
        password: string;
    };
    setLoginData: React.Dispatch<React.SetStateAction<{
        email: string;
        password: string;
    }>>;
    signupData: SignupDataType; // Use the new type
    setSignupData: React.Dispatch<React.SetStateAction<SignupDataType>>; // Use the new type
    handleLoginSubmit: (e: React.FormEvent) => void;
    handleSignupSubmit: (e: React.FormEvent) => Promise<void>; // Updated return type for async
    handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSignupChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Explicitly define here
    profilePicPreview: string | null;
    setProfilePicPreview: React.Dispatch<React.SetStateAction<string | null>>;
    coverImagePreview: string | null;
    setCoverImagePreview: React.Dispatch<React.SetStateAction<string | null>>;
};


export interface AuthProviderProps {
    children: React.ReactNode;
}