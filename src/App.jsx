import { Outlet } from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="h-[600px]">sddsss</div>
    </>
  )
}

export default App
