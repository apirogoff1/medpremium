'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function ClinicHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/clinic" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">М</span>
            </div>
            <span className="text-xl font-bold text-gray-900">МедПремиум</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/clinic/doctors" className="text-sm font-medium text-[#1e3a5f] hover:text-blue-500 transition-colors">Врачи</Link>
            <Link href="/clinic/services" className="text-sm font-medium text-[#1e3a5f] hover:text-blue-500 transition-colors">Услуги</Link>
            <Link href="/clinic/about" className="text-sm font-medium text-[#1e3a5f] hover:text-blue-500 transition-colors">О клинике</Link>
            <Link href="/clinic/contacts" className="text-sm font-medium text-[#1e3a5f] hover:text-blue-500 transition-colors">Контакты</Link>
            <Link href="/clinic/booking" className="text-sm font-medium text-[#1e3a5f] hover:text-blue-500 transition-colors">Запись онлайн</Link>
            <Link href="/clinic/dashboard" className="text-sm font-medium text-[#1e3a5f] hover:text-blue-500 transition-colors">Личный кабинет</Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/clinic/doctors" className="text-[#1e3a5f] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Врачи</Link>
          <Link href="/clinic/services" className="text-[#1e3a5f] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Услуги</Link>
          <Link href="/clinic/about" className="text-[#1e3a5f] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>О клинике</Link>
          <Link href="/clinic/contacts" className="text-[#1e3a5f] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Контакты</Link>
          <Link href="/clinic/booking" className="text-[#1e3a5f] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Запись онлайн</Link>
          <Link href="/clinic/dashboard" className="text-[#1e3a5f] font-medium py-2" onClick={() => setIsOpen(false)}>Личный кабинет</Link>
        </div>
      )}
    </header>
  );
}
