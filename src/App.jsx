import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      header
      <main>
        <Outlet />
      </main>
      footer
    </>
  )
}

export default App
