import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: 'Name, email and message are required.' },
            { status: 400 }
        );
    }

    return NextResponse.json({ message: `Thank you for your interest, ${name}` });
};
