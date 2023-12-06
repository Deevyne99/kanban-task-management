import Button from './Button'
import logo from '../assets/logo.png'
import logoMobile from '../assets/mobile-logo.png'
import { FaAngleDown } from 'react-icons/fa6'
// import React from 'react'

const Navbar = () => {
  return (
    <header className='flex  z-10 sticky  bg-white  top-0 left items-center   border-b-[1px]   border-[#F4F7FD]  w-full  '>
      <div className='flex   md:border-r-[1px] border-r-[0pc] border-[#F4F7FD] items-center md:w-[300px] '>
        <div className=' md:px-4 px-2 py-6'>
          <img className='hidden md:flex' src={logo} alt='' />
          <img className='md:hidden flex' src={logoMobile} alt='' />
        </div>
      </div>
      <nav className='flex   md:px-4 px-2 items-center md:w-[80%] w-full justify-between '>
        <h1 className='capitalize md:flex hidden md:text-2xl lg:text-4xl font-Plus font-bold'>
          platform launch
        </h1>
        <button className='md:hidden flex justify-center items-center gap-2 capitalize font-Plus font-bold'>
          platform launch <FaAngleDown />
        </button>
        <div className='flex gap-4 items-center'>
          <div className='md:flex hidden '>
            <Button
              title='+ add task'
              onClick={() => console.log('add task')}
              type='button'
            />
          </div>
          <button className='md:hidden w-[50px] hover:bg-hover h-[30px] bg-purple rounded-2xl font-bold text-xl justify-center items-center text-white '>
            +
          </button>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5'
              height='20'
              viewBox='0 0 5 20'
              fill='none'
            >
              <circle cx='2.30769' cy='2.30769' r='2.30769' fill='#828FA3' />
              <circle cx='2.30769' cy='10' r='2.30769' fill='#828FA3' />
              <circle cx='2.30769' cy='17.6923' r='2.30769' fill='#828FA3' />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
