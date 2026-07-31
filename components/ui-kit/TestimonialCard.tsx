import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  text: string
  author: string
  role: string
  avatar?: string
  rating?: number
  className?: string
}

export function TestimonialCard({ text, author, role, avatar, rating = 5, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      'rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col gap-4',
      'dark:border-gray-800 dark:bg-gray-900',
      className
    )}>
      {rating > 0 && (
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={cn('text-lg', i < rating ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700')}>
              ★
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
        "{text}"
      </p>
      <div className="flex items-center gap-3 mt-auto">
        {avatar ? (
          <img src={avatar} alt={author} className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-semibold text-sm">
            {author.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{author}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
