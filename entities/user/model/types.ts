import type { ID, Role } from '@/shared'

// Тип пользователя
export interface User {
  id: ID
  name: string
  email: string
  role: Role
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// Тип для создания пользователя
export interface CreateUserDto {
  name: string
  email: string
  password: string
  role?: Role
}

// Тип для обновления пользователя
export interface UpdateUserDto {
  name?: string
  email?: string
  avatar?: string
}
