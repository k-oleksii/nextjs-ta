// Core
import { NextResponse } from 'next/server';

// Handling a POST request and returning a JSON response
export async function POST() {
  const newMessage = {
    status: 'success',
    message: 'Message sent successfully.',
  };

  return NextResponse.json(newMessage);
}
