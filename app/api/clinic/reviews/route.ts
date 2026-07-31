import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  text: z.string().min(10).max(1000),
})

function getUserFromToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string }
  } catch {
    return null
  }
}

export async function GET() {
  try {
    const reviews = await prisma.clinicReview.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const user = getUserFromToken(token)
    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
    const body = await req.json()
    const data = reviewSchema.parse(body)
    const existing = await prisma.clinicReview.findFirst({
      where: { userId: user.userId },
    })
    if (existing) {
      return NextResponse.json({ error: 'Review already exists' }, { status: 400 })
    }
    const review = await prisma.clinicReview.create({
      data: {
        userId: user.userId,
        rating: data.rating,
        comment: data.text,
      },
    })
    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 422 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
