import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Board, Register } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/board' element={<Board />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
