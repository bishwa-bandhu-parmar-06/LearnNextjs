import { NextResponse } from 'next/server';
export async function POST(request) {
    // Parse the incoming request body
    const data = await request.json();
    console.log("Received data:", data);
    
    return NextResponse.json({
        success: true,
        message: 'Hello from the API route!',
        data
    });
};