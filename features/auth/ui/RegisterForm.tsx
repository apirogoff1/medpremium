'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registerSchema, type RegisterDto } from '../model/schemas'
import { useRegister } from '../api'

export function RegisterForm() {
  const router = useRouter()
  const { mutate: register_, isPending, error } = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterDto) => {
    register_(data, {
      onSuccess: () => router.push('/clinic/dashboard'),
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-sm">
      <h1 className="text-2xl font-bold">Регистрация</h1>

      {error && (
        <div className="text-red-500 text-sm">{error.message}</div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Имя</label>
        <input
          {...register('name')}
          type="text"
          placeholder="Иван Иванов"
          className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <input
          {...register('email')}
          type="email"
          placeholder="you@example.com"
          className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Пароль</label>
        <input
          {...register('password')}
          type="password"
          placeholder="••••••••"
          className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Подтвердите пароль</label>
        <input
          {...register('confirmPassword')}
          type="password"
          placeholder="••••••••"
          className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? 'Регистрируемся...' : 'Зарегистрироваться'}
      </button>
    </form>
  )
}
