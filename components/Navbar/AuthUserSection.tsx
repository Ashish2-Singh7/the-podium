// "use client"
import React from 'react'
import LoginSignUpButtons from './LoginSignUpButtons'
import LogoutUserButtons from './LogoutUserButtons'
import { cookies } from 'next/headers';

async function getInitialUserDetails(jwtCookie) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/user-details`, {
        headers: { 'Cookie': `jwt=${jwtCookie.value}` },
        next: {
            revalidate: 600
        }
    });
    if (!res.ok) {
        console.error("Something went wrong");
    }
    const data = await res.json();
    return data.user;
}


const AuthUserSection = async () => {
    let initialUser;
    const cookieStore = await cookies()
    const jwt = cookieStore.get('jwt')
    if (jwt) {
        initialUser = await getInitialUserDetails(jwt);
    }
    return (
        <div className="hidden md:flex items-center space-x-4">

            {!jwt ? (
                <LoginSignUpButtons />
            ) : (
                <LogoutUserButtons user={initialUser} />
            )}
        </div>
    )
}

export default AuthUserSection
