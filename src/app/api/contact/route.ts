import { NextResponse } from 'next/server';

export async function POST() {
  const newMessage = {
    status: 'success',
    message: 'Message sent successfully.',
  };

  return NextResponse.json(newMessage);
}
