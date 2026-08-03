content = '''import type { Metadata } from 'next'
import { Suspense } from 'react'
import { DoctorsList } from '@/features/clinic/ui/DoctorsList'
import { prisma } from '@/shared/lib/prisma'

export const metadata: Metadata = {
  title: 'Врачи',
  description: 'Все врачи клиники МедПремиум. 25 специалистов высшей категории. Выберите врача и запишитесь онлайн.',
  openGraph: {
    title: 'Врачи МедПремиум',
    description: '25 специалистов высшей категории. Онлайн-запись.',
    url: '/clinic/doctors',
  },
}

export default async function DoctorsPage() {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: { select: { name: true, email: true } },
      specialization: true,
      services: true,
    },
    orderBy: { rating: 'desc' },
  })

  return (
    <div style={{background:'linear-gradient(180deg,#b8c8d8 0%,#ccdae8 100%)',minHeight:'100vh'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 style={{fontFamily:'var(--font-playfair)',fontSize:'36px',fontWeight:800,color:'#0f2238',marginBottom:'12px'}}>Наши врачи</h1>
          <p style={{color:'#1a2a3a',fontSize:'17px',lineHeight:1.85,fontWeight:500}}>
            25 специалистов высшей категории. Выберите врача и запишитесь онлайн.
          </p>
        </div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <DoctorsList initialDoctors={doctors} />
        </Suspense>
      </div>
    </div>
  )
}
'''

with open(r'C:\Users\raund\Desktop\portfolio\Medpremium\app\clinic\doctors\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')