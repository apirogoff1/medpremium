import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { GradientText } from './GradientText'

interface HeroSectionProps {
  badge?: string
  title: string
  titleHighlight?: string
  description: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  className?: string
  centered?: boolean
}

export function HeroSection({
  badge,
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
  className,
  centered = true,
}: HeroSectionProps) {
  return (
    <section className={cn(
      'w-full py-20 md:py-32',
      className
    )}>
      <div className={cn(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8',
        centered && 'items-center text-center'
      )}>
        {badge && (
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 dark:border-blue-800 dark:bg-blue-950">
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300">{badge}</span>
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl max-w-4xl">
          {title}{' '}
          {titleHighlight && (
            <GradientText>{titleHighlight}</GradientText>
          )}
        </h1>
        <p className={cn(
          'text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed',
        )}>
          {description}
        </p>
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {primaryAction}
            {secondaryAction}
          </div>
        )}
      </div>
    </section>
  )
}
