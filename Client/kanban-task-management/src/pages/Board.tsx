// import React from 'react'
import Sidebar from '../components/Sidebar'
// import Dropdown from '../components/Dropdown'
// import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { useAppSelector } from '../hooks/hook'

const Board = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.modal)
  return (
    <main className='flex flex-col bg-screen min-h-screen'>
      {/* <div className=' justify-center items-center border border-[#F4F7FD] border-l-[1px]'>
        <div className='px-4 py-6 '>
          <img src={logo} alt='' />
        </div> */}
      {/* </div> */}
      <Navbar />
      <div className={`flex  justify-between w-full `}>
        <Sidebar />
        <div className={`bg-screen ${isSidebarOpen ? 'w-[78%]' : 'w-full'} `}>
          hello
        </div>
      </div>
    </main>
  )
}

export default Board
