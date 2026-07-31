import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const DAYS_AHEAD = 30
const START_HOUR = 6
const END_HOUR = 14
const END_MINUTE = 30
const SLOT_MINUTES = 30

async function main() {
  const doctors = await prisma.doctor.findMany({ select: { id: true } })
  console.log(`Найдено врачей: ${doctors.length}`)

  const today = new Date()
  today.setUTCHours(0, 0, 0, 0)

  let created = 0
  let skipped = 0

  for (let dayOffset = 0; dayOffset < DAYS_AHEAD; dayOffset++) {
    const day = new Date(today)
    day.setUTCDate(day.getUTCDate() + dayOffset)
    const dow = day.getUTCDay()

    if (dow === 0 || dow === 6) continue

    for (const doctor of doctors) {
      let hour = START_HOUR
      let minute = 0

      while (hour < END_HOUR || (hour === END_HOUR && minute <= END_MINUTE)) {
        const startTime = new Date(day)
        startTime.setUTCHours(hour, minute, 0, 0)

        const endTime = new Date(startTime)
        endTime.setUTCMinutes(endTime.getUTCMinutes() + SLOT_MINUTES)

        const exists = await prisma.timeSlot.findFirst({
          where: { doctorId: doctor.id, startTime },
        })

        if (!exists) {
          await prisma.timeSlot.create({
            data: {
              doctorId: doctor.id,
              startTime,
              endTime,
              status: 'AVAILABLE',
            },
          })
          created++
        } else {
          skipped++
        }

        minute += SLOT_MINUTES
        if (minute >= 60) {
          minute -= 60
          hour++
        }
      }
    }
  }

  console.log(`Создано новых слотов: ${created}`)
  console.log(`Пропущено: ${skipped}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
