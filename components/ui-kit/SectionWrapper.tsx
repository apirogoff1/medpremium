import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export function SectionWrapper({ children, className, id, fullWidth = false }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('w-full py-16 md:py-24', className)}>
      <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', fullWidth ? 'w-full' : 'max-w-7xl')}>
        {children}
      </div>
    </section>
  )
}
