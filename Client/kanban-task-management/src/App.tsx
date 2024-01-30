import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Board, Register, Error } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useAppSelector } from './hooks/hook'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const { darkMode } = useAppSelector((state) => state.modal)
  useEffect(() => {
    document.documentElement.className = darkMode
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />

          <Route
            path='/board'
            element={
              <ProtectedRoute>
                <Board />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
