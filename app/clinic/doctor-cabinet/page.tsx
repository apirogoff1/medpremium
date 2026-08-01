'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks'
interface DoctorAppointment {
  id: string
  status: string
  patientName: string | null
  patient: { name: string; email: string } | null
  service: { name: string } | null
  timeSlot: { startTime: string } | null
}
export default function DoctorCabinetPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [hydrated, setHydrated] = useState(false)
  const [appointments, setAppointments] = useState<DoctorAppointment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setHydrated(true)
  }, [])
  useEffect(() => {
    if (!hydrated) return
    if (!isAuthenticated) {
      router.push('/login')
      return
    }
    if (user && user.role !== 'doctor') {
      router.push('/clinic/dashboard')
    }
  }, [hydrated, isAuthenticated, user, router])
  useEffect(() => {
    if (!hydrated) return
    fetch('/api/clinic/appointments/doctor')
      .then((res) => res.json())
      .then((data) => {
        setAppointments(Array.isArray(data) ? data : [])
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [hydrated])
  if (!hydrated || isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    )
  }
  if (!isAuthenticated || !user || user.role !== 'doctor') return null
  const statusLabels: Record<string, string> = {
    PENDING: 'Ожидает подтверждения',
    CONFIRMED: 'Подтверждён',
    COMPLETED: 'Завершён',
    CANCELLED: 'Отменён',
    PAID: 'Оплачен',
  }
  const statusColors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    CONFIRMED: 'bg-blue-100 text-blue-700',
    COMPLETED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-red-100 text-red-700',
    PAID: 'bg-purple-100 text-purple-700',
  }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Кабинет врача</h1>
        <p className="text-gray-500">Добро пожаловать, {user.name}</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <p className="text-sm text-gray-500 mb-1">Всего записей</p>
        <p className="text-3xl font-bold text-blue-600">{appointments.length}</p>
      </div>
      <div className="space-y-3">
        {appointments.length === 0 && (
          <p className="text-gray-500 text-center py-8">Записей пока нет</p>
        )}
        {appointments.map((a) => (
          <div key={a.id} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-medium text-gray-900">{a.patient?.name ?? a.patientName ?? 'Пациент'}</p>
              <p className="text-sm text-gray-500">{a.service?.name}</p>
              {a.timeSlot?.startTime && (
                <p className="text-sm text-gray-500">
                  {new Date(a.timeSlot.startTime).toLocaleString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              )}
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto ${statusColors[a.status] ?? 'bg-gray-100 text-gray-700'}`}>
              {statusLabels[a.status] ?? a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}