import type { Metadata } from 'next'
import { Suspense } from 'react'
import { DoctorsList } from '@/features/clinic/ui/DoctorsList'
export const metadata: Metadata = {
  title: 'Врачи',
  description: 'Все врачи клиники МедПремиум. 25 специалистов высшей категории. Выберите врача и запишитесь онлайн.',
  openGraph: {
    title: 'Врачи МедПремиум',
    description: '25 специалистов высшей категории. Онлайн-запись.',
    url: '/clinic/doctors',
  },
}
export default function DoctorsPage() {
  return (
    <div style={{background:'linear-gradient(180deg,#b8c8d8 0%,#ccdae8 100%)',minHeight:'100vh'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 style={{fontFamily:'var(--font-playfair)',fontSize:'36px',fontWeight:800,color:'#0f2238',marginBottom:'12px'}}>Наши врачи</h1>
          <p style={{color:'#1a2a3a',fontSize:'17px',lineHeight:1.85,fontWeight:500}}>
            25 специалистов высшей категории. Выберите врача и запишитесь онлайн.
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}><DoctorsList /></Suspense>
      </div>
    </div>
  )
}