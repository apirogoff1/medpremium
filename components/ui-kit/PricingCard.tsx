import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  buttonText: string
  onButtonClick?: () => void
  highlighted?: boolean
  badge?: string
  className?: string
}

export function PricingCard({
  title,
  price,
  period = 'mo',
  description,
  features,
  buttonText,
  onButtonClick,
  highlighted = false,
  badge,
  className,
}: PricingCardProps) {
  return (
    <div className={cn(
      'relative rounded-2xl border p-8 flex flex-col gap-6 transition-all duration-300',
      highlighted
        ? 'border-blue-500 bg-blue-600 text-white shadow-xl shadow-blue-200 dark:shadow-blue-950'
        : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
      className
    )}>
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        </div>
      )}
      <div>
        <h3 className={cn('text-lg font-semibold', highlighted ? 'text-white' : 'text-gray-900 dark:text-white')}>
          {title}
        </h3>
        <p className={cn('mt-1 text-sm', highlighted ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400')}>
          {description}
        </p>
      </div>
      <div className="flex items-end gap-1">
        <span className={cn('text-4xl font-bold', highlighted ? 'text-white' : 'text-gray-900 dark:text-white')}>
          {price}
        </span>
        <span className={cn('mb-1 text-sm', highlighted ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400')}>
          /{period}
        </span>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className={cn(
              'text-lg',
              feature.included
                ? highlighted ? 'text-white' : 'text-green-500'
                : highlighted ? 'text-blue-300' : 'text-gray-300'
            )}>
              {feature.included ? '✓' : '✗'}
            </span>
            <span className={cn(
              feature.included
                ? highlighted ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                : highlighted ? 'text-blue-200' : 'text-gray-400'
            )}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Button
        onClick={onButtonClick}
        className={cn(
          'mt-auto w-full',
          highlighted
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : ''
        )}
        variant={highlighted ? 'outline' : 'default'}
      >
        {buttonText}
      </Button>
    </div>
  )
}
