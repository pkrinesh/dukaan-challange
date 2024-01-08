import { Sidebar } from './components/SideBar'

function App() {
  return (
    <div className="w-full h-screen flex">
      <aside className="w-[224px]">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-app"></div>
    </div>
  )
}

export default App
