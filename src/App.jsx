import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/Main.layout'
import { routes } from './routes/routes'

function App() {

  return (
    <div className='App'>
      <MainLayout />

      <div className="flex-1 md:ml-[20%] mt-14 p-10 overflow-y-auto">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default App
