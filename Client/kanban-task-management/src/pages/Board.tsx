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

import DeleteModal from '../components/DeleteModal'
import TaskModal from '../components/TaskModal'

import { useEffect } from 'react'
import { toggleSidebar } from '../features/modal/modalSlice'
import { getAllBoard } from '../features/Boards/allBoards/allBoardSlice'
import { HashLoader } from 'react-spinners'

const Board = () => {
  const {
    createBoardModal,
    isSidebarOpen,
    smallSidebar,
    addTask,
    deleteBoard,
    taskModal,
    dropDown,
    deleteTask,
  } = useAppSelector((state) => state.modal)
  // const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { isLoading, loading, board } = useAppSelector(
    (store) => store.allboard
  )

  useEffect(() => {
    dispatch(getAllBoard())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getSingleBoard(board._id))
  // }, [board._id, dispatch])

  const colors: string[] = [
    'blue-500',
    'red-500',
    'orange-500',
    'purple-500',
    'green-500',
    'indigo-500',
    'yellow-500',
    'pink-500',
    'sky-500',
  ]

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <HashLoader
          color='#635FC7'
          className='justify-center items-center mx-auto'
        />
      </div>
    )
  }
  return (
    <main
      className={`flex flex-col  h-full relative w-full &::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] `}
    >
      {/* <div className=' justify-center items-center border border-[#F4F7FD] border-l-[1px]'>
        <div className='px-4 py-6 '>
          <img src={logo} alt='' />
        </div> */}
      {/* </div> */}
      <div
        className={`flex ${
          createBoardModal
            ? 'bg-[#000] backdrop-blur-[1px]  fixed left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        } `}
      ></div>
      <div
        className={`flex md:hidden ${
          smallSidebar
            ? 'bg-[#000] backdrop-blur-[1px] transition-all duration-500  fixed left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        }`}
      ></div>
      <div
        className={`flex  ${
          addTask
            ? 'bg-[#000] backdrop-blur-[1px]  fixed left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        } `}
      ></div>
      <div
        className={`flex  ${
          dropDown
            ? 'bg-[#000] backdrop-blur-[1px]  fixed left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        } `}
      ></div>
      <div
        className={`flex  ${
          deleteBoard || deleteTask
            ? 'bg-[#000] backdrop-blur-[1px]  fixed left-0 top-0 h-full z-20  w-full opacity-50'
            : 'h-[0px] transition-all duration-500'
        } `}
      ></div>
      <div
        className={`flex  ${
          taskModal
            ? 'bg-[#000] backdrop-blur-[1px]  fixed left-0 top-0 h-full z-20  w-full opacity-50'
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
      <div>
        <TaskModal />
      </div>
      <div className={`flex`}>
        <DropDownModal />
      </div>
      <div>
        <DeleteModal />
      </div>
      <div className={` flex  `}>
        <div className='flex  '>
          <Sidebar />
        </div>
        {loading ? (
          <div className='flex justify-center items-center w-full h-screen'>
            <HashLoader
              color='#635FC7'
              className='justify-center items-center mx-auto'
            />
          </div>
        ) : (
          <div
            className={` mt-16  px-4 md:py-8 py-4 w-full  flex gap-4 min-h-screen  h-full  mr-[4px] ${
              isSidebarOpen ? 'overflow-x-scroll' : ' mr-[4px]'
            } &::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] `}
          >
            {board?.columns?.map((item, index) => {
              const columnColor = colors[index]
              // console.log(columnColor)
              return (
                <div key={item.name}>
                  <Column {...item} color={columnColor} />
                </div>
              )
            })}

            {board?.columns?.length > 0 && <AddColumn />}
          </div>
        )}

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
