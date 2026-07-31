import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().max(1000).optional(),
})

function getUserFromToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string }
  } catch {
    return null
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const user = getUserFromToken(token)
    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
    const appointment = await prisma.appointment.findUnique({
      where: { id },
    })
    if (!appointment) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    if (appointment.patientId !== user.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    if (appointment.status !== 'COMPLETED') {
      return NextResponse.json({ error: 'Review only allowed after completed appointment' }, { status: 400 })
    }
    const existing = await prisma.doctorReview.findUnique({
      where: { appointmentId: id },
    })
    if (existing) {
      return NextResponse.json({ error: 'Review already exists' }, { status: 400 })
    }
    const body = await req.json()
    const data = reviewSchema.parse(body)
    const review = await prisma.$transaction(async (tx) => {
      const newReview = await tx.doctorReview.create({
        data: {
          doctorId: appointment.doctorId,
          appointmentId: id,
          rating: data.rating,
          comment: data.comment,
        },
      })
      const reviews = await tx.doctorReview.aggregate({
        where: { doctorId: appointment.doctorId },
        _avg: { rating: true },
        _count: true,
      })
      await tx.doctor.update({
        where: { id: appointment.doctorId },
        data: {
          rating: reviews._avg.rating ?? 0,
          reviewsCount: reviews._count,
        },
      })
      return newReview
    })
    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 422 })
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
