import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'

import BoardButton from './BoardButton'
import {
  toggleSidebar,
  toggleCreateBoard,
  toggleDarkMode,
} from '../features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useState } from 'react'
import ReactSwitch from 'react-switch'

// import { Switch } from '@headlessui/react'

const Sidebar = () => {
  const { isSidebarOpen, darkMode } = useAppSelector((state) => state.modal)

  const [isDarkMode, setIsDarkMode] = useState(darkMode ? true : false)

  const dispatch = useAppDispatch()

  return (
    <section className={` flex flex-col `}>
      <aside
        className={`transition-all  sticky  hidden  duration-300   h-full  left-0 mt-[70px]  flex-col gap-4  ${
          isSidebarOpen
            ? 'translate-x-0 xl:w-[300px] md:flex lg:w-[300px] pr-4 md:w-[260px]'
            : '-translate-x-full w-0'
        }  ${darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'} `}
      >
        {/* <img src={logo} alt='' /> */}
        <p className='text-textLabel flex  mt-4 ml-6 tracking-[2.4px] leading-6 font-Plus'>
          All Boards (3)
        </p>

        <div className='flex flex-col gap-2'>
          <BoardButton
            onClick={() => console.log('hello world')}
            title={'Ecommerce'}
            type='button'
          />
          <BoardButton
            onClick={() => dispatch(toggleCreateBoard())}
            title={'+ create new board'}
            type='button'
          />
        </div>
        <div
          className={`w-[220px] absolute bottom-48 flex justify-between p-4 px-6 ml-6  rounded-md ${
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
