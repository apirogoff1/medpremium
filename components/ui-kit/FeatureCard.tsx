import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      'group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300',
      'hover:shadow-md hover:border-blue-200 hover:-translate-y-1',
      'dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800',
      className
    )}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
