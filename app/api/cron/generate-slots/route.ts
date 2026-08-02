import { NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { ensureFutureSlots } from '@/features/clinic/model/slotGenerator'

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({ select: { id: true } })
    for (const doctor of doctors) {
      await ensureFutureSlots(doctor.id)
    }
    return NextResponse.json({ ok: true, doctors: doctors.length })
  } catch (error) {
    console.error('[CRON generate-slots]', error)
    return NextResponse.json({ error: 'Ошибка генерации слотов' }, { status: 500 })
  }
}
