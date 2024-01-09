import { ButtonIcon, ButtonRoot, ButtonText } from './components/button'
import { Footer } from './components/footer'
import {
  ArrowDownSmallIcon,
  ArrowDownSolidIcon,
  MenuIcon,
  MessageIcon,
  QuestionIcon,
} from './components/icons'
import { OverviewCard } from './components/overview-card'
import { Search } from './components/search'
import { Sidebar } from './components/nav-sidebar'
import { TransactionTable } from './components/transaction-table'
import React from 'react'
import { cn } from './utils'
import { useWindowSize } from './hooks/use-window-size'

function App() {
  const { windowWidth } = useWindowSize()
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (windowWidth > 1024) {
      setIsOpen(false)
    }
  }, [windowWidth])

  return (
    <div className="w-full relative h-screen flex overflow-hidden">
      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div className="overflow-none h-screen hidden lg:block">
          <Sidebar />
        </div>
      )}
      <div className="flex-1 bg-app overflow-auto">
        <header className="flex flex-col justify-center items-center bg-light px-2 sm:px-8 py-3 border-b border-border">
          <div className="flex gap-2 items-center justify-between w-full">
            <div className="flex gap-4 items-center">
              <button className="lg:hidden" onClick={() => setIsOpen(true)}>
                <i>
                  <MenuIcon className={cn('text-2xl text-card-fg')} />
                </i>
              </button>
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
            <div className="hidden sm:flex flex-1 justify-center items-center max-w-[400px]">
              <Search
                className="w-[clamp(200px,100%,400px)]"
                placeholder="Search features, tutorials, etc"
              />
            </div>
            <div className="">
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
          </div>
          <div className="mt-2 flex justify-center sm:hidden w-full">
            <Search
              className="min-w-[200px] w-full"
              placeholder="Search features, tutorials, etc"
            />
          </div>
        </header>

        <main className="p-2 sm:p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-app-fg text-xl font-medium">Overview</h2>
            <ButtonRoot>
              <ButtonText>Last Month</ButtonText>
              <ButtonIcon>
                <ArrowDownSmallIcon />
              </ButtonIcon>
            </ButtonRoot>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            <OverviewCard title="Online Orders" data="231" />
            <OverviewCard title="Amount received" data="₹23,92,312.19" />
          </div>
          <div className="mt-8 -mx-2 sm:mx-0">
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

export function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      {isOpen && (
        <div className={cn('w-full h-full absolute z-20')}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute z-30 inset-0 w-full bg-card-fg opacity-70 lg:hidden"
          />
          <Sidebar />
        </div>
      )}
    </>
  )
}
