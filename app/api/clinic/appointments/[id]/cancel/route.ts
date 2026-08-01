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

export async function PATCH(
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
    if (appointment.patientId !== user.userId && user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    if (appointment.status === 'CANCELLED' || appointment.status === 'COMPLETED') {
      return NextResponse.json({ error: 'Cannot cancel this appointment' }, { status: 400 })
    }
    await prisma.$transaction(async (tx) => {
      await tx.appointment.update({
        where: { id },
        data: { status: 'CANCELLED' },
      })
      await tx.timeSlot.update({
        where: { id: appointment.timeSlotId },
        data: { status: 'AVAILABLE' },
      })
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
