import { cn } from '../utils'
import { SearchIcon } from './icons'

type SearchProps = React.ComponentProps<'input'> & {
  iconColor?: string
}

export function Search({ className, iconColor, ...rest }: SearchProps) {
  return (
    <label className="relative">
      <span className="absolute top-[12px] left-[16px]">
        <i>
          <SearchIcon fill={iconColor} />
        </i>
      </span>
      <input
        className={cn('h-10 pl-10 bg-search text-[15px] text-search-fg rounded-md', className)}
        {...rest}
      />
    </label>
  )
}
