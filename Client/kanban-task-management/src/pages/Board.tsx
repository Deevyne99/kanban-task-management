// import { useState } from 'react'
import {
  Sidebar,
  Navbar,
  DropDownModal,
  AddColumn,
  AddBoardModal,
  Column,
  SmallSidebar,
  AddTask,
} from '../components'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { FaEye } from 'react-icons/fa6'
import { toggleSidebar } from '../features/modal/modalSlice'

const Board = () => {
  const { createBoardModal, isSidebarOpen, smallSidebar, addTask } =
    useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  // const [createInput, setCreateInput] = useState(false)

  return (
    <main className={`flex flex-col bg-screen h-full relative w-full `}>
      {/* <div className=' justify-center items-center border border-[#F4F7FD] border-l-[1px]'>
        <div className='px-4 py-6 '>
          <img src={logo} alt='' />
        </div> */}
      {/* </div> */}
      <div
        className={`flex ${
          createBoardModal
            ? 'bg-[#000]  absolute left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        } `}
      ></div>
      <div
        className={`flex md:hidden ${
          smallSidebar
            ? 'bg-[#000]  transition-all duration-500  absolute left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        }`}
      ></div>
      <div
        className={`flex ${
          addTask
            ? 'bg-[#000]  absolute left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        } `}
      ></div>
      <div>
        <AddBoardModal />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <AddTask />
      </div>
      <div>
        <SmallSidebar />
      </div>
      <div className={`flex`}>
        <DropDownModal />
      </div>

      <div className={`flex overflow-x-scroll `}>
        <div className='flex   '>
          <Sidebar />
        </div>
        <div
          className={`bg-screen   mt-16 px-4 md:py-8 py-4   flex gap-4 min-h-screen w-full h-full  mr-[4px] ${
            isSidebarOpen ? 'overflow-x-scroll ' : 'mr-[4px]'
          } `}
        >
          <Column name={'todo'} />
          <Column name={'todo'} />
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
