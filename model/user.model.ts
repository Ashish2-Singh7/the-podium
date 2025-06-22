import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    bio: {
        type: String,
        default: ''
    },
    websiteAdd: {
        type: String,
        default: ''
    },
    socialHandles: {
        twitter: { type: String, default: '' },
        linkedin: { type: String, default: '' },
        github: { type: String, default: '' },
        instagram: { type: String, default: '' }
    },
    profilePic: {
        type: String,
        default: ""
    },
    coverImage: {
        type: String,
        default: ""
    }
    // createdAt and updatedAt => Member since <createdAt>
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;