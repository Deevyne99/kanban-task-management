// import React from 'react'
import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'
// import logo from '../assets/logo.png'
import BoardButton from './BoardButton'
// import { Switch } from '@headlessui/react'
// import image from '../assets/button-image.png'
const Sidebar = () => {
  return (
    <aside className='bg-white sticky min-h-screen flex flex-col gap-4 '>
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
          onClick={() => console.log('hello world')}
          title={'+ create new board'}
          type='button'
        />
      </div>
      <div className='w-[220px] absolute bottom-32 flex justify-between p-4 px-6 ml-6 bg-[#F4F7FD] rounded-md'>
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
      <div className='absolute bottom-16'>
        <BoardButton
          onClick={() => console.log('hello world')}
          title={'hide sidebar'}
          type='button'
        />
      </div>
    </aside>
  )
}

export default Sidebar
