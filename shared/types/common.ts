// Bazovye tipy dlya vsego proekta
export type ID = string
export type Role = 'PATIENT' | 'DOCTOR' | 'ADMIN'
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type AsyncFn<T = void> = () => Promise<T>
// Otvet ot API
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}
// Paginaciya
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}
// Spisok s paginaciey
export interface PaginatedResponse<T> {
  items: T[]
  pagination: Pagination
}
// Statusy zagruzki
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
