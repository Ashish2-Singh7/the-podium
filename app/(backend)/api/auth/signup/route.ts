import User from '@/model/user.model';
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookies from '@/utils/generateToken';
import { connectToDB } from '@/lib/db';
import { uploadToCloudinary } from '@/app/(backend)/_services/media.service';


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        // Access fields and files from the formData object
        const email = formData.get('email')?.toString(); // Use .toString() to ensure it's a string
        const username = formData.get('username')?.toString();
        const password = formData.get('password')?.toString() || '';
        const bio = formData.get('bio')?.toString();
        const websiteAdd = formData.get('websiteAdd')?.toString();
        const socialHandles = formData.get('socialHandles')?.toString();

        // For files, formData.get() returns a File object (or null if not present)
        const profilePic = formData.get('profilePic') as string | '';
        const coverImage = formData.get('coverImage') as string | '';
        let profilePicUrl = '';
        let coverImageUrl = '';

        if (profilePic) {
            profilePicUrl = await uploadToCloudinary(profilePic, 'the_podium/users');
        }

        if (coverImage) {
            coverImageUrl = await uploadToCloudinary(coverImage, 'the_podium/covers');
        }

        await connectToDB();

        const isUserExists = await User.findOne({ username });

        if (isUserExists) {
            return NextResponse.json({ error: "Username already exists" }, { status: 400 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            bio,
            websiteAdd,
            socialHandles,
            profilePic: profilePicUrl,
            coverImage: coverImageUrl
        });

        const response = NextResponse.json(
            { message: 'Account Created Successfully', user: { id: newUser._id, email: newUser.email, username: newUser.username, profilePic: newUser.profilePic } },
            { status: 201 }
        );

        if (newUser) {
            generateTokenAndSetCookies(newUser._id, response);
            newUser.save();
            return response;
        }
        else {
            return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
        }

    } catch (error) {
        console.log("Sign-Up Error:", error);
        return NextResponse.json({ message: "INTERNAL SERVER ERROR" });
    }
}