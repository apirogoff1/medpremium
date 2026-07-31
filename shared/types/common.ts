// Базовые типы для всего проекта

export type ID = string

export type Nullable<T> = T | null

export type Optional<T> = T | undefined

export type AsyncFn<T = void> = () => Promise<T>

// Ответ от API
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// Пагинация
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

// Список с пагинацией
export interface PaginatedResponse<T> {
  items: T[]
  pagination: Pagination
}

// Статусы загрузки
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
