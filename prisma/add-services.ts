import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const doctors = await prisma.doctor.findMany({ include: { specialization: true } })
  for (const doctor of doctors) {
    const existing = await prisma.service.count({ where: { doctorId: doctor.id } })
    if (existing > 0) continue
    await prisma.service.create({
      data: {
        name: 'Konsultaciya ' + doctor.specialization.name,
        price: 2500,
        duration: 30,
        doctorId: doctor.id,
      }
    })
  }
  console.log('Services added')
}
main().catch(console.error).finally(() => prisma.$disconnect())
