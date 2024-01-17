import { SetStateAction, useState } from 'react'
import { useAppSelector } from '../hooks/hook'

const TaskModal = () => {
  const { taskModal } = useAppSelector((store) => store.modal)

  const [selectedStatus, setSelectedStatus] = useState('todo')

  const handleStatusChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSelectedStatus(event.target.value)
  }
  return (
    <div className='relative'>
      <div
        className={`transition-all duration-500 ${
          taskModal ? 'top-32 z-30 ' : 'top-[-500px]'
        } fixed bg-white rounded-md  right-0 mx-auto w-[300px] sm:w-[350px] md:w-[450px] left-0 px-4 py-6 flex flex-col`}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex items-center font-Plus font-medium text-[#000112]'>
            <h3 className='font-Plus font-bold text-[#000112]'>
              Research pricing points of various competitors and trial different
              business models
            </h3>
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
          <div>
            <p className='text-[#828FA3] text-[14px] font-Plus'>
              We know what we're planning to build for version one. Now we need
              to finalise the first pricing model we'll use. Keep iterating the
              subtasks until we have a coherent proposition.
            </p>
          </div>
          <div className='flex flex-col'>
            <p>Subtasks (2 of 3)</p>
            <div>
              <div className='flex flex-col gap-2 mt-2'>
                <div className='flex gap-2 p-2 bg-[#F4F7FD] rounded-[4px]'>
                  <input
                    className='accent-purple border border-[#828FA340]'
                    type='checkbox'
                    name=''
                    id=''
                  />
                  <label htmlFor='' className='text-[14px] text-[#000112]'>
                    Research competitor pricing and business models
                  </label>
                </div>
                <div className='flex gap-2 p-2 bg-[#F4F7FD] rounded-[4px]'>
                  <input
                    type='checkbox'
                    name=''
                    id=''
                    className='accent-purple'
                  />
                  <label htmlFor='' className='text-[14px] text-[#000112]'>
                    Research competitor pricing and business models
                  </label>
                </div>
                <div className='flex gap-2 p-2 bg-[#F4F7FD] rounded-[4px]'>
                  <input
                    type='checkbox'
                    name=''
                    id=''
                    className='accent-purple'
                  />
                  <label htmlFor='' className='text-[14px] text-[#000112]'>
                    Research competitor pricing and business models
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='relative flex flex-col mt-2 text-left'>
            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className='block appearance-none w-full bg-white border border-[#828FA340] font-normal  focus:outline-none px-4 py-2 pr-8 rounded leading-tight '
            >
              <option value='todo'>Todo</option>
              <option value='doing'>Doing</option>
              <option value='done'>Done</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal
