import type { Metadata } from 'next'
import Link from 'next/link'
import ContactWidget from '@/components/ContactWidget'
import ClinicHeader from '@/components/landing/ClinicHeader'

export const metadata: Metadata = {
  title: {
    default: 'МедПремиум — Частная клиника в Москве',
    template: '%s | МедПремиум',
  },
  description: 'Частная многопрофильная клиника МедПремиум в Москве. 25 врачей, 8 специализаций. Онлайн-запись 24/7.',
  keywords: ['клиника', 'врач', 'запись к врачу', 'медицина', 'Москва', 'МедПремиум'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'МедПремиум',
  },
}

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ClinicHeader />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-900 text-white mt-auto" style={{position:'relative'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">М</span>
                </div>
                <span className="font-bold text-white text-lg">МедПремиум</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Частная многопрофильная клиника в Москве. Качественная медицина без очередей.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/clinic/doctors" className="hover:text-teal-400 transition-colors">Наши врачи</Link></li>
                <li><Link href="/clinic/services" className="hover:text-teal-400 transition-colors">Услуги и цены</Link></li>
                <li><Link href="/clinic/booking" className="hover:text-teal-400 transition-colors">Онлайн-запись</Link></li>
                <li><Link href="/clinic/dashboard" className="hover:text-teal-400 transition-colors">Личный кабинет</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>г. Москва, ул. Тверская, 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@medpremium.ru</li>
                <li>Пн–Пт: 8:00–21:00, Сб–Вс: 9:00–18:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#F3F4F6 100%)',zIndex:5,pointerEvents:'none'}} />
      </footer>
      <div className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        © 2024 МедПремиум. Все права защищены.
      </div>
      <ContactWidget />
    </div>
  )
}