import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Board, Register, Error } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useAppSelector } from './hooks/hook'

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
          <Route path='/board' element={<Board />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
