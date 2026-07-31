import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { cookies } from 'next/headers'
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import { sendAppointmentConfirmation } from '@/lib/email'

function getUserFromToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string }
  } catch {
    return null
  }
}

const appointmentSchema = z.object({
  doctorId: z.string().min(1),
  serviceId: z.string().min(1),
  timeSlotId: z.string().min(1),
  comment: z.string().max(500).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    let patientId: string | null = null
    if (token) {
      const user = getUserFromToken(token)
      if (user) patientId = user.userId
    }
    const body = await req.json()
    const parsed = appointmentSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }
    const data = parsed.data
    const slot = await prisma.timeSlot.findUnique({
      where: { id: data.timeSlotId },
    })
    if (!slot || slot.status !== 'AVAILABLE') {
      return NextResponse.json({ error: 'Slot not available' }, { status: 400 })
    }
    const service = await prisma.service.findUnique({
      where: { id: data.serviceId },
    })
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }
    const appointment = await prisma.$transaction(async (tx: any) => {
      await tx.timeSlot.update({
        where: { id: data.timeSlotId },
        data: { status: 'BOOKED' },
      })
      const newAppointment = await tx.appointment.create({
        data: {
          patientId: patientId,
          doctorId: data.doctorId,
          serviceId: data.serviceId,
          timeSlotId: data.timeSlotId,
          comment: data.comment,
          totalAmount: service.price,
          status: 'PENDING',
        },
        include: {
          doctor: {
            include: { user: { select: { name: true } } }
          },
          service: true,
          timeSlot: true,
        },
      })
      return newAppointment
    })
    try {
      await sendAppointmentConfirmation({
        doctorName: appointment.doctor.user.name,
        serviceName: appointment.service.name,
        date: new Date(appointment.timeSlot.startTime).toLocaleDateString('ru-RU'),
        time: new Date(appointment.timeSlot.startTime).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        totalAmount: Number(appointment.totalAmount),
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
    }
    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    console.error('Appointment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
