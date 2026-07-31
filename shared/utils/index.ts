// Общие утилиты проекта
// Форматирование даты
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}
// Форматирование цены в рублях
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(price)
}
// Задержка (sleep)
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
// Обрезка текста
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}
// Проверка что значение не пустое
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}
// Генерация случайного ID
export function generateId(): string {
  return Math.random().toString(36).slice(2, 11)
}
// Путь к обработанной версии фото
// Пример: /photos/doctors/doctor-1.jpg + 'portrait' => /photos/doctors/processed/doctor-1-portrait.jpg
export function getProcessedPhoto(
  photoUrl: string | null | undefined,
  suffix: 'portrait' | 'square' | 'wide' | 'narrow' | 'thumb'
): string | null {
  if (!photoUrl) return null
  const dir = photoUrl.substring(0, photoUrl.lastIndexOf('/'))
  const filename = photoUrl.substring(photoUrl.lastIndexOf('/') + 1, photoUrl.lastIndexOf('.'))
  const ext = photoUrl.substring(photoUrl.lastIndexOf('.'))
  return dir + '/processed/' + filename + '-' + suffix + ext
}
