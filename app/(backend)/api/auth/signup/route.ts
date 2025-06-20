import User from '@/model/user.model';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookies from '@/utils/generateToken';
import { connectToDB } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const { email, username, password, confirm_password, bio, websiteAdd, socialHandles, profilePic, coverImage } = await req.json();
        await connectToDB()
        if (password != confirm_password) {
            return NextResponse.json({ message: "Passwords don't match" }, { status: 400 })
        }

        const isUserExists = await User.findOne({ username });

        if (isUserExists) {
            return NextResponse.json({ error: "Username already exists" }, { status: 400 });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            bio,
            websiteAdd,
            socialHandles,
            profilePic,
            coverImage
        });

        const response = NextResponse.json(
            { message: 'Account Created Successfully', user: { id: newUser._id, email: newUser.email, username: newUser.username } },
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
        console.log("Error:", error);
        return NextResponse.json({ message: "INTERNAL SERVER ERROR" });
    }
}