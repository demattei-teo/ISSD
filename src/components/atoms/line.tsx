import { cn } from '@/lib/utils'

interface LineProps {
  className?: string
  direction?: 'left' | 'right' | 'vertical'
}

function Line({ className, direction = 'right' }: LineProps) {
  return (
    <span
      className={cn(
        'inline-block h-[100%]  border-l',
        direction === 'left' && 'before:left-0', direction === 'vertical' && 'before:top-0 w-[1px]',
        className
      )}
    />
  )
}

export { Line }

