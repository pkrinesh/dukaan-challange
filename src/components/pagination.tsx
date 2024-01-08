import { cn } from '../utils'
import { ButtonIcon, ButtonRoot, ButtonText } from './button'
import { ArrowDownSmallIcon } from './icons'

export function Pagination({ className }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('w-full flex gap-6 justify-center', className)}>
      <ButtonRoot className="px-[14px]">
        <ButtonIcon className="rotate-90">
          <ArrowDownSmallIcon />
        </ButtonIcon>
        <ButtonText>Previous</ButtonText>
      </ButtonRoot>

      <div className="flex gap-2 items-center">
        <PageButton>1</PageButton>
        <PageButton>...</PageButton>
        <PageButton className="bg-accent text-white hover:bg-accent">10</PageButton>
        <PageButton>11</PageButton>
        <PageButton>12</PageButton>
        <PageButton>13</PageButton>
        <PageButton>14</PageButton>
        <PageButton>15</PageButton>
        <PageButton>16</PageButton>
        <PageButton>17</PageButton>
        <PageButton>18</PageButton>
      </div>

      <ButtonRoot className="px-[14px]">
        <ButtonText>Next</ButtonText>
        <ButtonIcon className="-rotate-90">
          <ArrowDownSmallIcon />
        </ButtonIcon>
      </ButtonRoot>
    </div>
  )
}

function PageButton({ children, className, ...rest }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'h-7 w-7 flex justify-center items-center text-card-fg-muted text-sm rounded',
        'hover:bg-search transition',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
