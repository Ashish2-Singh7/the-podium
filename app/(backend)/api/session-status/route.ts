import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const jwtCookie = cookieStore.get('jwt');

        if (!jwtCookie) {
            return NextResponse.json({ isAuthenticated: false, message: 'No session token found' }, { status: 200 });
        }


        return NextResponse.json({ isAuthenticated: true, }, { status: 200 });

    } catch (error: any) {
        console.error('Session status check failed:', error);
        let message = 'Invalid session token';
        if (error.name === 'TokenExpiredError') {
            message = 'Session expired';
            const response = NextResponse.json({ isAuthenticated: false, message }, { status: 200 });
            response.cookies.delete('jwt');
            return response;
        } else if (error.name === 'JsonWebTokenError') {
            message = 'Invalid token signature';
        }

        return NextResponse.json({ isAuthenticated: false, message }, { status: 200 });
    }
}
