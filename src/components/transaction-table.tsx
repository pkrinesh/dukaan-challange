import { cn } from '../utils'
import { ButtonIcon, ButtonRoot, ButtonText } from './button'
import { DownloadIcon, SortIcon } from './icons'
import { Pagination } from './pagination'
import { Search } from './search'

export function TransactionTable() {
  return (
    <>
      <h2 className="text-app-fg text-xl font-medium px-2 sm:px-0">Transactions | This Month</h2>
      <div className="mt-5 rounded-lg bg-card p-1 sm:p-3 pb-6 card-shadow">
        <div className="flex justify-between items-center">
          <Search
            className="w-[248px] bg-light border border-border text-sm"
            iconColor="#999999"
            placeholder="Search by order ID..."
          />

          <div className="flex items-center gap-1 sm:gap-3 ml-1">
            <ButtonRoot>
              <ButtonText>Sort</ButtonText>
              <ButtonIcon>
                <SortIcon />
              </ButtonIcon>
            </ButtonRoot>
            <ButtonRoot className="w-9 flex items-center justify-center">
              <ButtonIcon>
                <DownloadIcon />
              </ButtonIcon>
            </ButtonRoot>
          </div>
        </div>

        <Table className="mt-3 w-full" />
        <Pagination className="mt-6 mx-auto" />
      </div>
    </>
  )
}

export function Table({ className }: React.ComponentProps<'table'>) {
  return (
    <table className={cn(className)}>
      <TableHead />
      <tbody>
        {[...Array(10)].map((_, i) => (
          <TRow key={i} />
        ))}
        <TRow />
        <TRow />
      </tbody>
    </table>
  )
}

export function TableHead() {
  const Th = ({ children, className }: React.ComponentProps<'th'>) => (
    <th className={cn('px-3 py-2.5 text-xs sm:text-sm font-medium text-left', className)}>
      {children}
    </th>
  )
  return (
    <thead className="bg-table-head text-table-head-fg">
      <tr>
        <Th className="rounded-l-lg">Order Id</Th>
        <Th>Order date</Th>
        <Th className="text-nowrap sm:text-end">Order Amount</Th>
        <Th className="text-end rounded-r-lg">Transaction Fees</Th>
      </tr>
    </thead>
  )
}

export function TRow() {
  const Td = ({ children, className }: React.ComponentProps<'td'>) => (
    <td className={cn('px-3 py-2.5 text-sm text-table-fg', className)}>{children}</td>
  )
  return (
    <tr className="h-12 border-b border-b-border">
      <Td className="text-accent-fg">
        <a className="cursor-pointer hover:underline transition">#211209</a>
      </Td>
      <Td className="text-nowrap">7 july, 2023</Td>
      <Td className="text-end">₹1,278.23</Td>
      <Td className="text-end">₹22</Td>
    </tr>
  )
}
