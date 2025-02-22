import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Context {
  params: { short: string };
}

export async function GET(req: Request, { params }: Context) {
  try {
    const urlEntry = await prisma.shortUrl.findUnique({
      where: { short: params.short }
    });

    if (urlEntry) {
      return NextResponse.redirect(urlEntry.original);
    } else {
      return NextResponse.json({ error: 'Short URL not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
