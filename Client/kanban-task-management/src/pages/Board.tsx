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
    <main className='flex flex-col bg-screen h-screen relative overflow-x-hidden'>
      {/* <div className=' justify-center items-center border border-[#F4F7FD] border-l-[1px]'>
        <div className='px-4 py-6 '>
          <img src={logo} alt='' />
        </div> */}
      {/* </div> */}
      <Navbar />
      <div
        className={`${
          isSidebarOpen
            ? 'grid lg:grid-cols-[300px_minmax(900px,_1fr)_0px] md:grid-cols-[260px_minmax(900px,_1fr)_0px] grid-cols-[0px_minmax(900px,_1fr)_0px]  '
            : 'grid grid-cols-[100%_minmax(900px,_1fr)_0px]'
        }   justify-between   `}
      >
        {isSidebarOpen && <Sidebar />}
        <div
          className={`bg-screen p-4 flex gap-4 w-full  min-h-screen  ${
            isSidebarOpen ? ' overflow-x-scroll   ' : ' overflow-x-scroll '
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
            className='flex fixed left-0 bottom-12 bg-[#635FC7] p-3 rounded-tr-[24px] rounded-br-[24px] hover:bg-[#A8A4FF]'
          >
            <FaEye className='text-[#fff]' />
          </button>
        )}
      </div>
    </main>
  )
}

export default Board
