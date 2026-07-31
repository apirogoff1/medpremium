import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { ensureFutureSlots } from '@/features/clinic/model/slotGenerator'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const doctorId = searchParams.get('doctorId')
    const date = searchParams.get('date')

    if (!doctorId || !date) {
      return NextResponse.json({ error: 'РЈРєР°Р¶РёС‚Рµ РІСЂР°С‡Р° Рё РґР°С‚Сѓ' }, { status: 400 })
    }

    await ensureFutureSlots(doctorId)

    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)

    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59, 999)

    const slots = await prisma.timeSlot.findMany({
      where: {
        doctorId,
        startTime: {
          gte: startOfDay,
          lte: endOfDay,
        },
        status: 'AVAILABLE',
      },
      orderBy: { startTime: 'asc' },
    })

    return NextResponse.json(slots)
  } catch (error) {
    console.error('[GET /api/clinic/slots]', error)
    return NextResponse.json({ error: 'РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё СЃР»РѕС‚РѕРІ' }, { status: 500 })
  }
}