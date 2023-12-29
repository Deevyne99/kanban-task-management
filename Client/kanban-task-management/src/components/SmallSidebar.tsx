import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'
import { toggleCreateBoard } from '../features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

import { BoardButton } from '.'

// import React from 'react'

const SmallSidebar = () => {
  const { smallSidebar } = useAppSelector((store) => store.modal)
  const dispatch = useAppDispatch()
  return (
    <aside className={` flex flex-col md:hidden`}>
      <div
        className={`fixed transition-all duration-500  ${
          smallSidebar ? 'top-24 z-30' : 'top-[-400px] '
        } left-8 py-4 pr-4 rounded-lg shadow-md bg-white w-[260px] min-h-[300px]`}
      >
        <p className='text-textLabel flex  mt-4 ml-6 tracking-[2.4px] leading-6 font-Plus'>
          All Boards (3)
        </p>

        <div className='flex flex-col gap-2 mt-3'>
          <BoardButton
            onClick={() => console.log('hello world')}
            title={'Ecommerce'}
            type='button'
          />
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
        <div className='w-[220px] mt-8  flex justify-between p-4 px-6 ml-6 bg-[#F4F7FD] rounded-md'>
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
      </div>
    </aside>
  )
}

export default SmallSidebar
