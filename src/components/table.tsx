import { cn } from '../utils'

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
    <th className={cn('px-3 py-2.5 text-sm font-medium text-left', className)}>{children}</th>
  )
  return (
    <thead className="bg-table-head text-table-head-fg">
      <tr>
        <Th className="rounded-l-lg">Order Id</Th>
        <Th>Order date</Th>
        <Th className="text-end">Order Amount</Th>
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
        <a className="cursor-pointer">#211209</a>
      </Td>
      <Td>7 july, 2023</Td>
      <Td className="text-end">₹1,278.23</Td>
      <Td className="text-end">₹22</Td>
    </tr>
  )
}
