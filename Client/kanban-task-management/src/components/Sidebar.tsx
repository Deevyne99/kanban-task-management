import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'

import BoardButton from './BoardButton'
import {
  toggleSidebar,
  toggleCreateBoard,
  toggleDarkMode,
} from '../features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

import ReactSwitch from 'react-switch'
import { getSingleBoard } from '../features/Boards/allBoards/allBoardSlice'

// import { Switch } from '@headlessui/react'

const Sidebar = () => {
  const { isSidebarOpen, darkMode } = useAppSelector((state) => state.modal)
  const { boards } = useAppSelector((state) => state.allboard)

  const dispatch = useAppDispatch()

  return (
    <section className={` flex flex-col w-full`}>
      <aside
        className={`transition-all  sticky  hidden  duration-300 w-full   h-screen  left-0 mt-[70px]  flex-col gap-4  ${
          isSidebarOpen
            ? 'translate-x-0  md:flex w-full pr-4 '
            : '-translate-x-full w-0'
        }  ${darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'} `}
      >
        {/* <img src={logo} alt='' /> */}
        <p className='text-textLabel flex  mt-4 ml-6 tracking-[2.4px] leading-6 font-Plus'>
          {`All Boards (${boards.length})`}
        </p>

        <div className='flex flex-col gap-2 h-[300px] overflow-x-hidden overflow-y-scroll scrollbar-thin scroll-purple'>
          {boards.map((item) => {
            return (
              <BoardButton
                onClick={() => dispatch(getSingleBoard(item._id))}
                title={`${item.boardName}`}
                type='button'
                key={item._id}
              />
            )
          })}

          <BoardButton
            onClick={() => dispatch(toggleCreateBoard())}
            title={'+ create new board'}
            type='button'
          />
        </div>
        <div
          className={`w-[220px] absolute bottom-44 flex justify-between p-4 px-6 ml-6  rounded-md ${
            darkMode === 'light' ? 'bg-screen' : 'bg-[#20212C]'
          }`}
        >
          <BsBrightnessHigh />
          <ReactSwitch
            checked={darkMode === 'dark' ? true : false}
            onChange={() => dispatch(toggleDarkMode())}
            className='custom-switch'
            onHandleColor='#fff'
            checkedIcon={false}
            uncheckedIcon={false}
            offHandleColor='#fff'
            onColor='#635FC7'
            offColor='#635FC7'
          />
          <BsMoonStars />
        </div>
        <div className='absolute bottom-28'>
          <BoardButton
            onClick={() => dispatch(toggleSidebar())}
            title={'hide sidebar'}
            type='button'
          />
        </div>
      </aside>
    </section>
  )
}

export default Sidebar
