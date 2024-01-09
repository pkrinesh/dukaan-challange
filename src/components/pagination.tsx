import React from 'react'
import { cn } from '../utils'
import { ButtonIcon, ButtonText } from './button'
import { ArrowDownSmallIcon } from './icons'

import { Pagination as Paginate, IPaginationProps } from 'react-headless-pagination'
import clsx from 'clsx'
import { useWindowSize } from '../hooks/use-window-size'

export function Pagination({ className }: Pick<IPaginationProps, 'className'>) {
  const { windowWidth } = useWindowSize()
  const TOTAL_PAGE = 18
  const [page, setPage] = React.useState(13)

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
    <Paginate
      totalPages={TOTAL_PAGE}
      edgePageCount={1}
      middlePagesSiblingCount={windowWidth < 750 ? 0 : 4}
      truncableText="..."
      currentPage={page}
      setCurrentPage={handlePageChange}
      className={cn('w-full flex gap-2 sm:gap-6 justify-center', className)}
      truncableClassName="w-5 sm:w-10 text-center"
    >
      <Paginate.PrevButton
        className={clsx(
          'flex items-center px-[14px] h-9 border border-border rounded gap-1.5 text-card-fg-muted',
          'hover:bg-search transition',
          page === 0 && 'opacity-50 cursor-not-allowed'
        )}
        disabled={page === 0}
      >
        <ButtonIcon className="rotate-90">
          <ArrowDownSmallIcon />
        </ButtonIcon>
        <ButtonText>Previous</ButtonText>
      </Paginate.PrevButton>

      <nav className="flex justify-center">
        <ul className="flex gap-2 items-center">
          <Paginate.PageButton
            activeClassName="bg-accent text-white hover:bg-accent"
            inactiveClassName="hover:bg-search"
            className={
              'h-7 w-7 flex justify-center items-center text-card-fg-muted text-sm rounded transition cursor-pointer'
            }
          />
        </ul>
      </nav>

      <Paginate.NextButton
        className={clsx(
          'flex items-center px-[14px] h-9 border border-border rounded gap-1.5 text-card-fg-muted',
          'hover:bg-search transition',
          page === TOTAL_PAGE - 1 && 'opacity-50 cursor-not-allowed'
        )}
        disabled={page === TOTAL_PAGE - 1}
      >
        <ButtonText>Next</ButtonText>
        <ButtonIcon className="-rotate-90">
          <ArrowDownSmallIcon />
        </ButtonIcon>
      </Paginate.NextButton>
    </Paginate>
  )
}
