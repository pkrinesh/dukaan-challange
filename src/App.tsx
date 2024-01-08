import { Sidebar } from './components/Sidebar'
import { Footer } from './components/footer'
import {
  ArrowDownSmallIcon,
  ArrowDownSolidIcon,
  DownloadIcon,
  MessageIcon,
  QuestionIcon,
  SortIcon,
} from './components/icons'
import { Pagination } from './components/pagination'
import { Search } from './components/search'
import { Table } from './components/table'

function App() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <aside className="w-[224px] overflow-none h-screen">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-app overflow-auto">
        <header className="flex bg-white items-center h-[64px] px-8 py-3 border-b border-border">
          <div className="flex flex-1 gap-4 items-center">
            <h3 className="text-[15px] leading-[22px]">Payments</h3>
            <div className="flex justify-center items-center text-xs gap-1.5">
              <button>
                <i>
                  <QuestionIcon />
                </i>
              </button>
              <p>How it works</p>
            </div>
          </div>
          <Search className="w-[400px]" placeholder="Search features, tutorials, etc" />
          <div className="flex-1">
            <div className="flex justify-end gap-3">
              <button className="w-10 h-10 rounded-full bg-[#E6E6E6] flex justify-center items-center">
                <i>
                  <MessageIcon />
                </i>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#E6E6E6] flex justify-center items-center">
                <i>
                  <ArrowDownSolidIcon />
                </i>
              </button>
            </div>
          </div>
        </header>
        <main className="p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-app-fg text-xl font-medium">Overview</h2>
            <div>
              <button className="flex px-[14px] text-card-fg-muted py-1.5 bg-card items-center rounded border border-border">
                Last Month
                <span className="pl-[7px]">
                  <i>
                    <ArrowDownSmallIcon />
                  </i>
                </span>
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-5">
            <div className="p-5 rounded-md bg-card card-shadow">
              <p className="text-card-fg-muted">Online Orders</p>
              <p className="pt-4 text-card-fg text-[32px] leading-[38px] font-medium">231</p>
            </div>
            <div className="p-5 rounded-md bg-card card-shadow">
              <p className="text-card-fg-muted">Amount received</p>
              <p className="pt-4 text-card-fg text-[32px] leading-[38px] font-medium">
                ₹23,92,312.19
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-app-fg text-xl font-medium">Transactions | This Month</h2>
            <div className="mt-5 rounded-lg bg-card p-3 pb-6 card-shadow">
              <div className="flex justify-between items-center">
                <Search
                  className="w-[248px] bg-white border border-border text-sm"
                  iconColor="#999999"
                  placeholder="Search by order ID..."
                />

                <div className="flex items-center gap-3">
                  <button className="flex items-center px-3 h-9 border border-border rounded gap-1.5 text-card-fg-muted">
                    Sort
                    <span>
                      <i>
                        <SortIcon />
                      </i>
                    </span>
                  </button>
                  <button className="flex items-center justify-center w-9 h-9 border border-border rounded">
                    <i>
                      <DownloadIcon />
                    </i>
                  </button>
                </div>
              </div>

              <Table className="mt-3 w-full" />

              <Pagination className="mt-6 mx-auto" />
            </div>
          </div>
          <div className="mt-4 text-center flex justify-center">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
