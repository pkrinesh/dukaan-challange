import React from 'react'
import { Dashboard } from './components/dashboard'
import { Sidebar } from './components/nav-sidebar'

function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="w-full relative h-screen flex overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Dashboard setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
