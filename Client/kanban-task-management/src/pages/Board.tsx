import { useState } from 'react'
import Sidebar from '../components/Sidebar'
// import Dropdown from '../components/Dropdown'
// import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import Column from '../components/Column'
import { FaEye } from 'react-icons/fa6'
import { toggleSidebar } from '../features/modal/modalSlice'
import { AddBoardModal } from '../components/AddBoardModal'
import AddColumn from '../components/AddColumn'

const Board = () => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen, createBoardModal } = useAppSelector(
    (state) => state.modal
  )
  const [createInput, setCreateInput] = useState(false)

  return (
    <main className={`flex flex-col bg-screen h-full relative w-full `}>
      {/* <div className=' justify-center items-center border border-[#F4F7FD] border-l-[1px]'>
        <div className='px-4 py-6 '>
          <img src={logo} alt='' />
        </div> */}
      {/* </div> */}
      <div
        className={`${
          createBoardModal
            ? 'bg-[#000] absolute left-0 top-0 h-full z-20 flex w-full opacity-50'
            : 'hidden'
        }`}
      ></div>
      {createBoardModal && <AddBoardModal />}
      <Navbar />
      <div className={`flex `}>
        {isSidebarOpen && <Sidebar />}
        <div
          className={`bg-screen mt-16 px-4 md:py-8 py-4   flex gap-4 min-h-screen w-full h-full    ${
            isSidebarOpen ? 'overflow-x-scroll' : 'overflow-x-scroll  '
          } `}
        >
          <Column name={'todo'} />
          <Column name={'todo'} />
          <Column name={'todo'} />
          <Column name={'todo'} />
          {/* <Column name={'todo'} /> */}
          <AddColumn />
        </div>
        {!isSidebarOpen && (
          <button
            onClick={() => dispatch(toggleSidebar())}
            className='md:flex hidden fixed left-0 bottom-12 bg-[#635FC7] p-3 rounded-tr-[24px] rounded-br-[24px] hover:bg-[#A8A4FF]'
          >
            <FaEye className='text-[#fff]' />
          </button>
        )}
      </div>
    </main>
  )
}

export default Board
