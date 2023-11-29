// import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <select
        name='todo'
        id='todo'
        className='md:w-[380px] sm:w-[350px]  w-[280px]  p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none'
      >
        <option
          value='todo'
          className='md:w-[380px] sm:w-[350px]  w-[280px]  p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none'
        >
          todo
        </option>
        <option
          value='done'
          className='md:w-[380px] sm:w-[350px]  w-[280px]  p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none'
        >
          done
        </option>
        <option
          value='doing'
          className='md:w-[380px] sm:w-[350px]  w-[280px]  p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none'
        >
          doing
        </option>
      </select>
    </div>
  )
}

export default Dropdown
