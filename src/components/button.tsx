import { cn } from '../utils'

export function ButtonRoot({ children, className }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'flex items-center px-3 h-9 border border-border rounded gap-1.5 text-card-fg-muted',
        'hover:bg-search transition',
        className
      )}
    >
      {children}
    </button>
  )
}

export function ButtonText({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <p className={className}>{children}</p>
}

export function ButtonIcon({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span className={className}>
      <i>{children}</i>
    </span>
  )
}
