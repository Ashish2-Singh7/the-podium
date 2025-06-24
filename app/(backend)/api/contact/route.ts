import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message || !subject) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_TO_SEND, // Your Gmail
            pass: process.env.EMAIL_PASS, // Gmail App Password
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO_SEND,
            subject: subject,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
        });

        return NextResponse.json({ message: "Message sended successfully" });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

export function GET() {
    return notFound(); // acts like the route doesn't exist
}
