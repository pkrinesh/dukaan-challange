import { cn } from '../utils'
import { SearchIcon } from './icons'

type SearchProps = React.ComponentProps<'input'> & {
  iconColor?: string
}

export function Search({ className, iconColor, ...rest }: SearchProps) {
  return (
    <div className="w-full">
      <label className="relative h-10">
        <span className="absolute top-0.5 left-4">
          <i>
            <SearchIcon fill={iconColor} />
          </i>
        </span>
        <input
          className={cn('h-10 pl-10 bg-search text-[15px] text-search-fg rounded-md', className)}
          {...rest}
        />
      </label>
    </div>
  )
}
