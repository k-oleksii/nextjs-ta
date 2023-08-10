import { NextResponse } from 'next/server';

export async function POST() {
  const newSubscriber = {
    id: 'nextJS',
    data: new Date().toISOString(),
  };

  return NextResponse.json(newSubscriber);
}
