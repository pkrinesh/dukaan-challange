import { ButtonIcon, ButtonRoot, ButtonText } from './components/button'
import { Footer } from './components/footer'
import {
  ArrowDownSmallIcon,
  ArrowDownSolidIcon,
  MessageIcon,
  QuestionIcon,
} from './components/icons'
import { OverviewCard } from './components/overview-card'
import { Search } from './components/search'
import { Sidebar } from './components/sidebar'
import { TransactionTable } from './components/transaction-table'

function App() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <aside className="w-[224px] overflow-none h-screen">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-app overflow-auto">
        <header className="flex bg-light items-center h-[64px] px-8 py-3 border-b border-border">
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
              <ButtonRoot className="w-10 h-10 rounded-full bg-[#E6E6E6] flex justify-center items-center">
                <ButtonIcon>
                  <MessageIcon />
                </ButtonIcon>
              </ButtonRoot>
              <ButtonRoot className="w-10 h-10 pt-1 rounded-full bg-[#E6E6E6] flex justify-center items-center">
                <ButtonIcon>
                  <ArrowDownSolidIcon />
                </ButtonIcon>
              </ButtonRoot>
            </div>
          </div>
        </header>

        <main className="p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-app-fg text-xl font-medium">Overview</h2>
            <ButtonRoot>
              <ButtonText>Last Month</ButtonText>
              <ButtonIcon>
                <ArrowDownSmallIcon />
              </ButtonIcon>
            </ButtonRoot>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-5">
            <OverviewCard title="Online Orders" data="231" />
            <OverviewCard title="Amount received" data="₹23,92,312.19" />
          </div>
          <div className="mt-8">
            <TransactionTable />
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
