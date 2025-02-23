import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = await new PrismaClient();

export async function GET(
  req: Request,
  props: {params: Promise<{ short: string }>}) {
  const params = await props.params;
  console.log(params);
  try {
    if (!params || !params.short) {
      return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    const short = params.short; // Safely extract the short param

    const urlEntry = await prisma.shorturl.findUnique({
      where: { short },
    });

    if (!urlEntry) {
      return NextResponse.json({ error: 'Short URL not found' }, { status: 404 });
    }

    return NextResponse.redirect(urlEntry.original); // Redirect to the original URL
  } catch (error) {
    console.error('Error fetching short URL:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
