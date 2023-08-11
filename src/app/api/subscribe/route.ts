// Core
import { NextResponse } from 'next/server';

// Handling a POST request and returning a JSON response
export async function POST() {
  const newSubscriber = {
    id: 'nextJS',
    data: new Date().toISOString(),
  };

  return NextResponse.json(newSubscriber);
}
