import Button from './Button'
import logo from '../assets/logo.png'
// import React from 'react'

const Navbar = () => {
  return (
    <header className='flex  z-10 sticky  bg-white top-0 left items-center   border-b-[1px]   border-[#F4F7FD]   '>
      <div className='flex   border-r-[1px] border-[#F4F7FD] items-center w-[300px] '>
        <div className=' px-4  py-6'>
          <img src={logo} alt='' />
        </div>
      </div>
      <nav className='flex   px-4  items-center w-[75%] justify-between bg-white '>
        <h1 className='capitalize md:text-2xl lg:text-4xl font-Plus font-bold'>
          platform launch
        </h1>
        <div className='flex gap-4 items-center'>
          <Button
            title='+ add task'
            onClick={() => console.log('add task')}
            type='button'
          />
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
