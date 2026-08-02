import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const specializations = [
  { name: 'Terapiya', slug: 'terapiya' },
  { name: 'Kardiologiya', slug: 'kardiologiya' },
  { name: 'Nevrologiya', slug: 'nevrologiya' },
  { name: 'Ortopediya', slug: 'ortopediya' },
  { name: 'Oftalmologiya', slug: 'oftalmologiya' },
  { name: 'Dermatologiya', slug: 'dermatologiya' },
  { name: 'Endokrinologiya', slug: 'endokrinologiya' },
  { name: 'Gastroenterologiya', slug: 'gastroenterologiya' },
]

const doctors = [
  { name: 'Vasilyeva Natalya Igorevna', email: 'vasilyeva@medpremium.ru', photo: '/photos/doctors/doctor-1.jpg', spec: 'terapiya', exp: 12 },
  { name: 'Kozlova Mariya Sergeevna', email: 'kozlova@medpremium.ru', photo: '/photos/doctors/doctor-2.jpg', spec: 'kardiologiya', exp: 8 },
  { name: 'Sarkisyan Yuliya Arturovna', email: 'sarkisyan@medpremium.ru', photo: '/photos/doctors/doctor-3.jpg', spec: 'nevrologiya', exp: 10 },
  { name: 'Popova Elena Viktorovna', email: 'popova@medpremium.ru', photo: '/photos/doctors/doctor-4.jpg', spec: 'ortopediya', exp: 15 },
  { name: 'Shtern Boris Lvovich', email: 'shtern@medpremium.ru', photo: '/photos/doctors/doctor-5.jpg', spec: 'oftalmologiya', exp: 20 },
  { name: 'Zaytsev Kirill Stanislavovich', email: 'zaytsev@medpremium.ru', photo: '/photos/doctors/doctor-6.jpg', spec: 'dermatologiya', exp: 7 },
  { name: 'Semyonova Tatyana Olegovna', email: 'semyonova@medpremium.ru', photo: '/photos/doctors/doctor-7.jpg', spec: 'endokrinologiya', exp: 11 },
  { name: 'Volkov Sergey Nikolaevich', email: 'volkov@medpremium.ru', photo: '/photos/doctors/doctor-8.jpg', spec: 'gastroenterologiya', exp: 9 },
  { name: 'Yudina Viktoriya Lvovna', email: 'yudina@medpremium.ru', photo: '/photos/doctors/doctor-9.jpg', spec: 'terapiya', exp: 6 },
  { name: 'Kim Andrey Olegovich', email: 'kim@medpremium.ru', photo: '/photos/doctors/doctor-10.jpg', spec: 'kardiologiya', exp: 13 },
  { name: 'Kulikov Artyom Gennadyevich', email: 'kulikov@medpremium.ru', photo: '/photos/doctors/doctor-11.jpg', spec: 'nevrologiya', exp: 5 },
  { name: 'Vinogradova Irina Konstantinovna', email: 'vinogradova@medpremium.ru', photo: '/photos/doctors/doctor-12.jpg', spec: 'ortopediya', exp: 17 },
  { name: 'Morozov Vladimir Borisovich', email: 'morozov@medpremium.ru', photo: '/photos/doctors/doctor-13.jpg', spec: 'oftalmologiya', exp: 14 },
  { name: 'Lebedeva Anna Dmitrievna', email: 'lebedeva@medpremium.ru', photo: '/photos/doctors/doctor-14.jpg', spec: 'dermatologiya', exp: 8 },
  { name: 'Levin Dmitriy Robertovich', email: 'levin@medpremium.ru', photo: '/photos/doctors/doctor-15.jpg', spec: 'endokrinologiya', exp: 16 },
  { name: 'Golubev Maksim Yuryevich', email: 'golubev@medpremium.ru', photo: '/photos/doctors/doctor-16.jpg', spec: 'gastroenterologiya', exp: 10 },
  { name: 'Belyaev Pavel Denisovich', email: 'belyaev@medpremium.ru', photo: '/photos/doctors/doctor-17.jpg', spec: 'terapiya', exp: 4 },
  { name: 'Tarasova Ekaterina Robertovna', email: 'tarasova@medpremium.ru', photo: '/photos/doctors/doctor-18.jpg', spec: 'kardiologiya', exp: 9 },
  { name: 'Sokolov Igor Mikhailovich', email: 'sokolov@medpremium.ru', photo: '/photos/doctors/doctor-19.jpg', spec: 'nevrologiya', exp: 18 },
  { name: 'Komissarova Alina Eduardovna', email: 'komissarova@medpremium.ru', photo: '/photos/doctors/doctor-20.jpg', spec: 'ortopediya', exp: 7 },
  { name: 'Novikova Olga Aleksandrovna', email: 'novikova@medpremium.ru', photo: '/photos/doctors/doctor-21.jpg', spec: 'oftalmologiya', exp: 11 },
  { name: 'Voronova Svetlana Vadimovna', email: 'voronova@medpremium.ru', photo: '/photos/doctors/doctor-22.jpg', spec: 'dermatologiya', exp: 6 },
  { name: 'Bogdanov Roman Fyodorovich', email: 'bogdanov@medpremium.ru', photo: '/photos/doctors/doctor-23.jpg', spec: 'endokrinologiya', exp: 12 },
  { name: 'Zakharova Elena Olegovna', email: 'zakharova@medpremium.ru', photo: '/photos/doctors/doctor-24.jpg', spec: 'gastroenterologiya', exp: 15 },
  { name: 'Belov Daniil Valentinovich', email: 'belov@medpremium.ru', photo: '/photos/doctors/doctor-25.jpg', spec: 'terapiya', exp: 3 },
]

async function main() {
  console.log('Seeding...')

  const specMap: Record<string, string> = {}
  for (const spec of specializations) {
    const s = await prisma.specialization.upsert({
      where: { slug: spec.slug },
      update: {},
      create: spec,
    })
    specMap[spec.slug] = s.id
  }
  console.log('Specializations done')

  const password = await bcrypt.hash('Doctor123!', 10)

  for (const doc of doctors) {
    const user = await prisma.user.upsert({
      where: { email: doc.email },
      update: {},
      create: { name: doc.name, email: doc.email, password, role: 'doctor' },
    })
    await prisma.doctor.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        specializationId: specMap[doc.spec],
        experienceYears: doc.exp,
        photoUrl: doc.photo,
        rating: 4.5,
        reviewsCount: 0,
      },
    })
  }
  console.log('Doctors done')
}

main().catch(console.error).finally(() => prisma.$disconnect())