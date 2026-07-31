import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()
async function main() {
  const patients = await p.user.findMany({
    where: { role: 'patient' },
    select: { id: true, name: true, email: true },
    take: 5,
  })
  console.log(JSON.stringify(patients, null, 2))
  await p.$disconnect()
}
main()