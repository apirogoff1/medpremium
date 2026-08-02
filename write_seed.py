content = """import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.specialization.update({ where: { slug: 'terapiya' }, data: { name: '\u0422\u0435\u0440\u0430\u043f\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'kardiologiya' }, data: { name: '\u041a\u0430\u0440\u0434\u0438\u043e\u043b\u043e\u0433\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'nevrologiya' }, data: { name: '\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'ortopediya' }, data: { name: '\u041e\u0440\u0442\u043e\u043f\u0435\u0434\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'oftalmologiya' }, data: { name: '\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'dermatologiya' }, data: { name: '\u0414\u0435\u0440\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'endokrinologiya' }, data: { name: '\u042d\u043d\u0434\u043e\u043a\u0440\u0438\u043d\u043e\u043b\u043e\u0433\u0438\u044f' } })
  await prisma.specialization.update({ where: { slug: 'gastroenterologiya' }, data: { name: '\u0413\u0430\u0441\u0442\u0440\u043e\u044d\u043d\u0442\u0435\u0440\u043e\u043b\u043e\u0433\u0438\u044f' } })
  console.log('Done')
}
main().catch(console.error).finally(() => prisma.$disconnect())
"""
open('C:/Users/raund/Desktop/portfolio/Medpremium/prisma/fix-names.ts', 'w', encoding='utf-8').write(content)
