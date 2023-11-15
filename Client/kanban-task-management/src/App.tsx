import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Board, Register } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/board' element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
