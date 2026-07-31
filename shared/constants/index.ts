// Константы приложения

export const APP_NAME = 'My Project'
export const APP_VERSION = '1.0.0'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

// API
export const API_VERSION = 'v1'
export const API_TIMEOUT = 10000 // 10 секунд

// Пагинация
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 20
export const MAX_LIMIT = 100

// Роли пользователей
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]

// Роуты
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
} as const
