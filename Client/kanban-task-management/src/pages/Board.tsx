// import React from 'react'
import Sidebar from '../components/Sidebar'
// import Dropdown from '../components/Dropdown'
import logo from '../assets/logo.png'

const Board = () => {
  return (
    <main className='grid  grid-cols-[300px_minmax(900px,_1fr)]'>
      <div className='  justify-center items-center'>
        <div className='p-4'>
          <img src={logo} alt='' />
        </div>
        <Sidebar />
      </div>
      <div className='bg-green-200'>
        <h1>body</h1>
      </div>
    </main>
  )
}

export default Board
