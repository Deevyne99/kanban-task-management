import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'
import {
  toggleCreateBoard,
  toggleDarkMode,
  closeSmallSidebar,
} from '../features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

import { BoardButton } from '.'
import { useEffect, useRef } from 'react'
import ReactSwitch from 'react-switch'
// import React from 'react'

const SmallSidebar = () => {
  const { smallSidebar, darkMode } = useAppSelector((store) => store.modal)
  const dispatch = useAppDispatch()

  const modalRef = useRef(null)

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (!modalRef.current.contains(e.target)) {
        dispatch(closeSmallSidebar())
      }
    }

    // Attach event listener when modal is open
    if (smallSidebar) {
      document.addEventListener('mousedown', handleBackdropClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick)
    }
  }, [smallSidebar, dispatch])

  return (
    <aside className={` flex flex-col md:hidden`}>
      <div
        className={`fixed transition-all duration-500  ${
          smallSidebar ? 'top-24 z-30' : 'top-[-400px] '
        } left-8 py-4 pr-4 rounded-lg shadow-md w-[80%] max-w-[280px] min-h-[300px] ${
          darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
        }`}
        ref={modalRef}
      >
        <p className='text-textLabel flex  mt-4 ml-6 tracking-[2.4px] leading-6 font-Plus'>
          All Boards (3)
        </p>

        <div className={`flex flex-col gap-2 mt-3 `}>
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
        <div
          className={`w-[220px] mt-8  flex justify-between p-4 px-6 ml-6  rounded-md ${
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
      </div>
    </aside>
  )
}

export default SmallSidebar
