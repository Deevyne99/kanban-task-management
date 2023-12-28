import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'

import BoardButton from './BoardButton'
import { toggleSidebar, toggleCreateBoard } from '../features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

// import { Switch } from '@headlessui/react'

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  return (
    <section className='relative flex flex-col bg-green-400'>
      <aside
        className={`transition-all fixed   hidden xl:w-[290px] md:flex lg:w-[275px] pr-4 md:w-[260px] duration-500 bg-white  h-full  left-0 mt-[70px]  flex-col gap-4  ${
          isSidebarOpen ? 'left-[0px] ' : 'left-[-300px]'
        } `}
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
        <div className='w-[220px] absolute bottom-48 flex justify-between p-4 px-6 ml-6 bg-[#F4F7FD] rounded-md'>
          <BsBrightnessHigh />
          {/* <Switch
          checked={darkSide}
          onChange={toggleDarkMode}
          className={`${
            darkSide ? 'bg-[#635fc7]' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              darkSide ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch> */}
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
