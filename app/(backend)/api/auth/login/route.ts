import User from "@/model/user.model";
import generateTokenAndSetCookies from "@/utils/generateToken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json({ message: "This is login route" }, { status: 200 })
}


export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!isPasswordCorrect || !user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
        }

        const response = NextResponse.json({
            message: "Logged in Successfully",
            user: {
                id: user._id,
                username: user.username,
                profilePic: user.profilePic,
            }
        }, { status: 200 })

        generateTokenAndSetCookies(user._id, response);

        return response;


    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ message: "INTERNAL SERVER ERROR" }, { status: 500 })
    }
}