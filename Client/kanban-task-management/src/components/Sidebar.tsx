// import React from 'react'
import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs'
import logo from '../assets/logo.png'
import BoardButton from './BoardButton'
import image from '../assets/button-image.png'
const Sidebar = () => {
  return (
    <aside className='bg-white relative'>
      <div className='p-4 flex-col justify-center items-center '>
        <img src={logo} alt='' />
        <p className='text-textLabel mt-8 tracking-[2.4px] leading-6 font-Plus'>
          All Boards (3)
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <BoardButton
          onClick={console.log('hello world')}
          title={'Ecommerce'}
          type='button'
          img={image}
        />
        <BoardButton
          onClick={console.log('hello world')}
          title={'+ create new board'}
          type='button'
        />
      </div>
      <div>
        <BsBrightnessHigh />
        <BsMoonStars />
      </div>
    </aside>
  )
}

export default Sidebar
