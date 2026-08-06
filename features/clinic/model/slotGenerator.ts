import { prisma } from '@/shared/lib/prisma'

const WORK_START_HOUR = 9
const WORK_END_HOUR = 18
const SLOT_MINUTES = 30
const HORIZON_DAYS = 35

export async function ensureFutureSlots(doctorId: string) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const generateUntil = new Date(today)
  generateUntil.setDate(generateUntil.getDate() + HORIZON_DAYS)

  const lastSlot = await prisma.timeSlot.findFirst({
    where: { doctorId },
    orderBy: { startTime: 'desc' },
  })

  const generateFrom = lastSlot
    ? new Date(lastSlot.startTime)
    : new Date(today)

  generateFrom.setHours(0, 0, 0, 0)

  if (lastSlot) {
    generateFrom.setDate(generateFrom.getDate() + 1)
  }

  if (generateFrom > generateUntil) {
    return
  }

  const newSlots: { doctorId: string; startTime: Date; endTime: Date; status: 'AVAILABLE' }[] = []

  for (
    const date = new Date(generateFrom);
    date <= generateUntil;
    date.setDate(date.getDate() + 1)
  ) {
    const dow = date.getDay()
    if (dow === 0 || dow === 6) continue

    for (let hour = WORK_START_HOUR; hour < WORK_END_HOUR; hour++) {
      for (let min = 0; min < 60; min += SLOT_MINUTES) {
        const start = new Date(date)
        start.setHours(hour, min, 0, 0)
        const end = new Date(start)
        end.setMinutes(end.getMinutes() + SLOT_MINUTES)
        newSlots.push({
          doctorId,
          startTime: start,
          endTime: end,
          status: 'AVAILABLE',
        })
      }
    }
  }

  if (newSlots.length > 0) {
    await prisma.timeSlot.createMany({ data: newSlots })
  }
}
