// import React from 'react'
import Sidebar from '../components/Sidebar'
// import Dropdown from '../components/Dropdown'
// import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import Column from '../components/Column'
import { FaEye } from 'react-icons/fa6'
import { toggleSidebar } from '../features/modal/modalSlice'

const Board = () => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen } = useAppSelector((state) => state.modal)
  return (
    <main className='flex flex-col bg-screen min-h-screen '>
      {/* <div className=' justify-center items-center border border-[#F4F7FD] border-l-[1px]'>
        <div className='px-4 py-6 '>
          <img src={logo} alt='' />
        </div> */}
      {/* </div> */}
      <Navbar />
      <div className={`flex  justify-between w-full  `}>
        {isSidebarOpen && <Sidebar />}
        <div
          className={`bg-screen p-4 flex gap-4  w-full ${
            isSidebarOpen ? ' overflow-x-scroll h-full  ' : ' overflow-x-hidden'
          } `}
        >
          <Column name={'todo'} />
          <Column name={'todo'} />
          <Column name={'todo'} />
          <Column name={'todo'} />
        </div>
        {!isSidebarOpen && (
          <button
            onClick={() => dispatch(toggleSidebar())}
            className='flex fixed left-0 top-[500px] bg-[#635FC7] p-3 rounded-tr-[24px] rounded-br-[24px] hover:bg-[#A8A4FF]'
          >
            <FaEye className='text-[#fff]' />
          </button>
        )}
      </div>
    </main>
  )
}

export default Board
