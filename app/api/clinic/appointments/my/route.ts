import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

function getUserFromToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string }
  } catch {
    return null
  }
}

export async function GET(req: NextRequest) {
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
    const appointments = await prisma.appointment.findMany({
      where: { patientId: user.userId },
      include: {
        doctor: {
          include: {
            user: { select: { name: true } },
            specialization: true,
          }
        },
        service: true,
        timeSlot: true,
        clinicPayment: true,
        doctorReview: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(appointments)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
