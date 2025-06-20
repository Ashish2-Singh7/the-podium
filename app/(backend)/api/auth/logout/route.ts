import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    return NextResponse.json({ message: "This is logout route" });
}

export const POST = async (req: Request) => {
    try {
        const response = NextResponse.json({ message: "Logged Out successfully" }, { status: 200 });
        response.cookies.delete("jwt");
        return response;

    } catch (error) {
        console.log("Logout Error:", error);
        return NextResponse.json({ message: "INTERNAL SERVER ERROR" }, { status: 500 });
    }
}