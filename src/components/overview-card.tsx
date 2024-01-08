export function OverviewCard({ title, data }: { title: string; data: string }) {
  return (
    <div className="p-5 rounded-md bg-card card-shadow">
      <p className="text-card-fg-muted">{title}</p>
      <p className="pt-4 text-card-fg text-[32px] leading-[38px] font-medium">{data}</p>
    </div>
  )
}
