import { z } from 'zod'

// Схема для входа
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email обязателен')
    .email('Введите корректный email'),
  password: z
    .string()
    .min(8, 'Пароль минимум 8 символов'),
})

// Схема для регистрации
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя минимум 2 символа')
    .max(50, 'Имя максимум 50 символов'),
  email: z
    .string()
    .min(1, 'Email обязателен')
    .email('Введите корректный email'),
  password: z
    .string()
    .min(8, 'Пароль минимум 8 символов')
    .max(100, 'Пароль максимум 100 символов'),
  confirmPassword: z
    .string()
    .min(1, 'Подтвердите пароль'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
})

// TypeScript типы из схем
export type LoginDto = z.infer<typeof loginSchema>
export type RegisterDto = z.infer<typeof registerSchema>
