import { Sidebar } from './components/SideBar'
import { ArrowDownSolidIcon, MessageIcon, QuestionIcon, SearchIcon } from './components/icons'

function App() {
  return (
    <div className="w-full h-screen flex">
      <aside className="w-[224px]">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-app">
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
          <label className="relative">
            <span className="absolute top-[12px] left-[16px]">
              <i>
                <SearchIcon />
              </i>
            </span>
            <input
              className="w-[400px] h-10 pl-10 bg-search text-[15px] text-search-fg rounded-md"
              placeholder="Search features, tutorials, etc"
            />
          </label>
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
        <main></main>
      </div>
    </div>
  )
}

export default App
