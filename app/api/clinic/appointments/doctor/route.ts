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
    if (!user || user.role !== 'doctor') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    const doctor = await prisma.doctor.findUnique({
      where: { userId: user.userId },
    })
    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 })
    }
    const appointments = await prisma.appointment.findMany({
      where: { doctorId: doctor.id },
      include: {
        patient: { select: { name: true, email: true } },
        service: true,
        timeSlot: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(appointments)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
