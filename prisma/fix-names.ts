import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.specialization.update({ where: { slug: 'terapiya' }, data: { name: 'Терапия' } })
  await prisma.specialization.update({ where: { slug: 'kardiologiya' }, data: { name: 'Кардиология' } })
  await prisma.specialization.update({ where: { slug: 'nevrologiya' }, data: { name: 'Неврология' } })
  await prisma.specialization.update({ where: { slug: 'ortopediya' }, data: { name: 'Ортопедия' } })
  await prisma.specialization.update({ where: { slug: 'oftalmologiya' }, data: { name: 'Офтальмология' } })
  await prisma.specialization.update({ where: { slug: 'dermatologiya' }, data: { name: 'Дерматология' } })
  await prisma.specialization.update({ where: { slug: 'endokrinologiya' }, data: { name: 'Эндокринология' } })
  await prisma.specialization.update({ where: { slug: 'gastroenterologiya' }, data: { name: 'Гастроэнтерология' } })
  console.log('Done')
}
main().catch(console.error).finally(() => prisma.$disconnect())
