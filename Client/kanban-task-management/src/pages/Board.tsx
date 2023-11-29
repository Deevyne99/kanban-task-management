// import React from 'react'
import Sidebar from '../components/Sidebar'
// import Dropdown from '../components/Dropdown'

const Board = () => {
  return (
    <main className='grid  grid-cols-[300px_minmax(900px,_1fr)]'>
      <div className='bg-red-500'>
        <Sidebar />
      </div>
      <div className='bg-green-200'>
        <h1>body</h1>
      </div>
    </main>
  )
}

export default Board
