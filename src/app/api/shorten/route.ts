import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { originalUrl } = await req.json();

    if (!originalUrl) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Generate a short ID
    const short = Math.random().toString(36).substring(7);

    // Store in database
    const newUrl = await prisma.shorturl.create({
      data: { original: originalUrl, short }
    });

    return NextResponse.json(newUrl);
  } catch {
    return NextResponse.json({ error: 'Failed to create short URL' }, { status: 500 });
  }
}
