import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, preferences, educationLevel } = body;

    const profile = await prisma.profile.upsert({
      where: { userId },
      update: { preferences, educationLevel },
      create: { userId, preferences, educationLevel, skills: [] },
    });

    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la sauvegarde du profil" }, { status: 500 });
  }
}