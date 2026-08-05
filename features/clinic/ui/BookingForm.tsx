'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDoctors, useTimeSlots, useCreateAppointment } from '../api'
import { appointmentSchema, type AppointmentDto } from '../model/schemas'

const fieldStyle = {
  width: '100%',
  height: '56px',
  background: '#F8FAFD',
  border: '1px solid #D9E2EE',
  borderRadius: '14px',
  padding: '12px 18px',
  fontSize: '16px',
  fontWeight: 500,
  color: '#304156',
  transition: '.25s ease',
  outline: 'none',
  cursor: 'pointer',
} as React.CSSProperties

const labelStyle = {
  display: 'block',
  fontSize: '15px',
  fontWeight: 600,
  color: '#45556B',
  marginBottom: '8px',
} as React.CSSProperties

const sectionStyle = {
  marginBottom: '24px',
  paddingBottom: '24px',
  borderBottom: '1px solid rgba(77,95,120,.12)',
} as React.CSSProperties

function StepBadge({ number, title, icon }: { number: number; title: string; icon: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#5A6F8C', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>
        {number}
      </div>
      <span style={{ fontSize: '24px', fontWeight: 600, color: '#24344A' }}>{title}</span>
      <span style={{ marginLeft: 'auto', color: '#6F839D' }}>{icon}</span>
    </div>
  )
}

function CrossIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F839D" strokeWidth="1.8"><path d="M12 4v16M4 12h16"/></svg>
}
function StethoscopeIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F839D" strokeWidth="1.8"><path d="M6 3v6a4 4 0 008 0V3M6 3H4M14 3h2M18 13a4 4 0 11-8 0v-2M18 13v3a4 4 0 01-4 4"/><circle cx="20" cy="10" r="2"/></svg>
}
function UserIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F839D" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.5-7 8-7s8 3 8 7"/></svg>
}
function NoteIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F839D" strokeWidth="1.8"><path d="M6 3h9l3 3v15H6z"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>
}
function CalendarIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F839D" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
}
function ClockIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F839D" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
}

export function BookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedDoctorId = searchParams.get('doctorId') ?? ''

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedDoctorId, setSelectedDoctorId] = useState(preselectedDoctorId)
  const [selectedSpecialization, setSelectedSpecialization] = useState('')
  const [specializations, setSpecializations] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/clinic/specializations')
      .then(res => res.json())
      .then(data => setSpecializations(data))
      .catch(console.error)
  }, [])

  const { data: allDoctors, isLoading: loadingDoctors } = useDoctors()

  const doctors = selectedSpecialization
    ? allDoctors?.filter((d: any) => d.specialization?.slug === selectedSpecialization)
    : allDoctors

  const { data: slots, isLoading: loadingSlots } = useTimeSlots(selectedDoctorId, selectedDate)
  const { mutate: createAppointment, isPending, isSuccess, error } = useCreateAppointment()

  const selectedDoctor = doctors?.find((d: { id: string }) => d.id === selectedDoctorId)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AppointmentDto>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctorId: preselectedDoctorId,
      patientName: '',
      patientPhone: '',
      comment: '',
    },
  })

  const watchedSlotId = watch('timeSlotId')

  function onSpecializationChange(slug: string) {
    setSelectedSpecialization(slug)
    setSelectedDoctorId('')
    setValue('doctorId', '')
    setValue('serviceId', '')
    setValue('timeSlotId', '')
  }

  function onDoctorChange(doctorId: string) {
    setSelectedDoctorId(doctorId)
    setValue('doctorId', doctorId)
    setValue('timeSlotId', '')
    setValue('serviceId', '')
  }

  function onSubmit(data: AppointmentDto) {
    createAppointment(data, {
      onSuccess: (appointment) => {
        router.push(`/clinic/booking/pay/${appointment.id}`)
      },
    })
  }

  const today = new Date().toISOString().split('T')[0]

  const cardStyle = {
    position: 'relative',
    maxWidth: '820px',
    margin: '0 auto',
    background: 'rgba(255,255,255,.94)',
    backdropFilter: 'blur(18px)',
    borderRadius: '24px',
    boxShadow: '0 25px 70px rgba(40,55,80,.14)',
    padding: '40px',
    overflow: 'hidden',
  } as React.CSSProperties

  if (isSuccess) {
    return (
      <div style={cardStyle}>
        <div className="text-4xl mb-4" style={{ textAlign: 'center' }}>✅</div>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#24344A', textAlign: 'center', marginBottom: '8px' }}>Запись успешно создана!</h2>
        <p style={{ color: '#607089', textAlign: 'center' }}>Перенаправляем на оплату...</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={cardStyle}>
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(97,121,151,.06)', filter: 'blur(70px)', pointerEvents: 'none' }} />

      <div style={sectionStyle}>
        <StepBadge number={1} title="Выберите специализацию" icon={<CrossIcon />} />
        <select
          value={selectedSpecialization}
          onChange={(e) => onSpecializationChange(e.target.value)}
          style={fieldStyle}
          className="booking-field"
        >
          <option value="">Все специализации</option>
          {specializations.map((spec) => (
            <option key={spec.slug} value={spec.slug}>
              {spec.name}
            </option>
          ))}
        </select>
      </div>

      <div style={sectionStyle}>
        <StepBadge number={2} title="Выберите врача" icon={<StethoscopeIcon />} />
        {loadingDoctors ? (
          <div style={{ height: '48px', background: '#F8FAFD', borderRadius: '14px' }} className="animate-pulse" />
        ) : (
          <select
            value={selectedDoctorId}
            onChange={(e) => onDoctorChange(e.target.value)}
            style={fieldStyle}
            className="booking-field"
          >
            <option value="">Выберите врача</option>
            {doctors?.map((doctor: { id: string; user: { name: string }; specialization: { name: string } }) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.user?.name} — {doctor.specialization?.name}
              </option>
            ))}
          </select>
        )}
        {errors.doctorId && (
          <p className="text-red-500 text-xs mt-1">{errors.doctorId.message}</p>
        )}
      </div>

      {selectedDoctor && (
        <div style={sectionStyle}>
          <StepBadge number={3} title="Выберите услугу" icon={<NoteIcon />} />
          <select
            {...register('serviceId')}
            style={fieldStyle}
            className="booking-field"
          >
            <option value="">Выберите услугу</option>
            {selectedDoctor.services?.map((service: { id: string; name: string; price: number; duration: number }) => (
              <option key={service.id} value={service.id}>
                {service.name} — {service.price?.toLocaleString('ru-RU')} ₽ ({service.duration} мин)
              </option>
            ))}
          </select>
          {errors.serviceId && (
            <p className="text-red-500 text-xs mt-1">{errors.serviceId.message}</p>
          )}
        </div>
      )}

      {selectedDoctorId && (
        <div style={sectionStyle}>
          <StepBadge number={4} title="Выберите дату" icon={<CalendarIcon />} />
          <input
            type="date"
            min={today}
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value)
              setValue('timeSlotId', '')
            }}
            style={fieldStyle}
            className="booking-field"
          />
        </div>
      )}

      {selectedDate && selectedDoctorId && (
        <div style={sectionStyle}>
          <StepBadge number={5} title="Выберите время" icon={<ClockIcon />} />
          {loadingSlots ? (
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ height: '48px', background: '#F8FAFD', borderRadius: '12px' }} className="animate-pulse" />
              ))}
            </div>
          ) : slots?.length === 0 ? (
            <p style={{ color: '#A2AFBE', fontSize: '14px' }}>Нет свободных слотов на выбранную дату</p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {slots?.map((slot: { id: string; startTime: string }) => {
                const time = new Date(slot.startTime).toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                const isSelected = watchedSlotId === slot.id
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setValue('timeSlotId', slot.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: 600,
                      border: isSelected ? '1px solid #435C7D' : '1px solid #D9E2EE',
                      background: isSelected ? 'linear-gradient(135deg,#54719A,#435C7D)' : '#F8FAFD',
                      color: isSelected ? '#fff' : '#304156',
                      transition: '.25s ease',
                    }}
                  >
                    {time}
                  </button>
                )
              })}
            </div>
          )}
          {errors.timeSlotId && (
            <p className="text-red-500 text-xs mt-2">{errors.timeSlotId.message}</p>
          )}
        </div>
      )}

      <div style={sectionStyle}>
        <StepBadge number={6} title="Данные пациента" icon={<UserIcon />} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={labelStyle}>Имя *</label>
            <input
              {...register('patientName')}
              placeholder="Введите ваше имя"
              style={fieldStyle}
              className="booking-field"
            />
            {errors.patientName && (
              <p className="text-red-500 text-xs mt-1">{errors.patientName.message}</p>
            )}
          </div>
          <div>
            <label style={labelStyle}>Телефон *</label>
            <input
              {...register('patientPhone')}
              placeholder="+7 (___) ___-__-__"
              style={fieldStyle}
              className="booking-field"
            />
            {errors.patientPhone && (
              <p className="text-red-500 text-xs mt-1">{errors.patientPhone.message}</p>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <StepBadge number={7} title="Комментарий (необязательно)" icon={<NoteIcon />} />
        <textarea
          {...register('comment')}
          placeholder="Опишите жалобы или пожелания к врачу..."
          style={{ ...fieldStyle, height: '110px', resize: 'none', paddingTop: '18px' }}
          className="booking-field"
        />
        {errors.comment && (
          <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600" style={{ marginBottom: '28px' }}>
          {error.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="booking-submit-btn"
        style={{
          width: '100%',
          height: '62px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg,#54719A,#435C7D)',
          boxShadow: '0 16px 40px rgba(67,92,125,.28)',
          color: '#fff',
          fontSize: '18px',
          fontWeight: 600,
          border: 'none',
          transition: '.25s ease',
          opacity: isPending ? 0.5 : 1,
          cursor: isPending ? 'not-allowed' : 'pointer',
        }}
      >
        {isPending ? 'Создаём запись...' : 'Записаться на приём'}
      </button>
    </form>
  )
}