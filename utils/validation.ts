import { SignupDataType } from "@/types";
import toast from "react-hot-toast";

export const validateSignUpInputs = (signupData: SignupDataType) => {
    const { email, username, password, confirm_password, bio } = signupData;

    const errors: string[] = [];

    // Required fields check (email, username, password, confirm_password)
    if (!email.trim()) errors.push("Email is required.");
    if (!username.trim()) errors.push("Username is required.");
    if (!password.trim()) errors.push("Password is required.");
    if (!confirm_password.trim()) errors.push("Confirm Password is required.");

    // Email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.trim() && !emailRegex.test(email.trim())) {
        errors.push("Please enter a valid email address.");
    }

    // Password length
    if (password.trim() && password.trim().length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // Password and confirm password match
    if (password.trim() !== confirm_password.trim()) {
        errors.push("Password and Confirm Password do not match.");
    }

    // Bio word count
    const bioWordCount = bio.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (bio.trim() && bioWordCount < 50) {
        errors.push(`Bio must be at least 50 words long. Current: ${bioWordCount} words.`);
    }

    if (errors.length > 0) {
        // MAKE IT BETTER
        toast.error(`This didn't work. \n` + errors.join('\n'));
        return false;
    }
    return true
}