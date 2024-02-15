import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import {
  toggleOptions,
  toggleDeleteTask,
  toggleEditTask,
} from '../features/modal/modalSlice'

const TaskModal = () => {
  const { taskModal, taskOptions, darkMode } = useAppSelector(
    (store) => store.modal
  )
  const options = ['todo', 'doing', 'done']
  const [selectedOption, setSelectedOption] = useState('Select Status')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dispatch = useAppDispatch()
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const selectOption = (option: string) => {
    setSelectedOption(option)
    setDropdownOpen(false)
  }
  return (
    <div className='relative'>
      <div
        className={`transition-all duration-500 ${
          taskModal ? 'top-8 sm:top-32 z-30 ' : 'top-[-500px]'
        } fixed ${
          darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
        }  rounded-md  right-0 mx-auto w-[300px] sm:w-[350px] md:w-[450px] left-0 px-4 py-6 flex flex-col`}
      >
        <div className='flex flex-col gap-4'>
          {taskOptions && (
            <div
              className={`flex flex-col w-[150px] rounded-md shadow- absolute top-20  p-4 gap-3 items-start sm:right-[-50px] right-0 ${
                darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
              }`}
            >
              <button onClick={() => dispatch(toggleEditTask())}>
                Edit task
              </button>
              <button
                onClick={() => dispatch(toggleDeleteTask())}
                className='text-[#EA5555]'
              >
                Delete task
              </button>
            </div>
          )}

          <div className='flex items-center font-Plus  '>
            <h3 className='font-Plus font-bold '>
              Research pricing points of various competitors and trial different
              business models
            </h3>
            <button onClick={() => dispatch(toggleOptions())}>
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
            <p className=' text-[13px] font-Plus leading-[23px]'>
              We know what we're planning to build for version one. Now we need
              to finalise the first pricing model we'll use. Keep iterating the
              subtasks until we have a coherent proposition.
            </p>
          </div>
          <div className='flex flex-col'>
            <p>Subtasks (2 of 3)</p>
            <div>
              <div className={` flex flex-col gap-2 mt-2`}>
                <div
                  className={` ${
                    darkMode === 'light' ? 'bg-screen' : 'bg-[#20212C]'
                  } flex gap-2 p-2  rounded-[4px]`}
                >
                  <input
                    className='accent-purple border border-[#828FA340]'
                    type='checkbox'
                    name=''
                    id=''
                  />
                  <label htmlFor='' className='text-[14px] '>
                    Research competitor pricing and business models
                  </label>
                </div>
                <div
                  className={` ${
                    darkMode === 'light' ? 'bg-screen' : 'bg-[#20212C]'
                  } flex gap-2 p-2  rounded-[4px]`}
                >
                  <input
                    className='accent-purple border border-[#828FA340]'
                    type='checkbox'
                    name=''
                    id=''
                  />
                  <label htmlFor='' className='text-[14px] '>
                    Research competitor pricing and business models
                  </label>
                </div>
                <div
                  className={` ${
                    darkMode === 'light' ? 'bg-screen' : 'bg-[#20212C]'
                  } flex gap-2 p-2  rounded-[4px]`}
                >
                  <input
                    className='accent-purple border border-[#828FA340]'
                    type='checkbox'
                    name=''
                    id=''
                  />
                  <label htmlFor='' className='text-[14px] '>
                    Research competitor pricing and business models
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full inline-block text-left'>
            <div>
              <span className='rounded-md '>
                <button
                  type='button'
                  className='inline-flex justify-between w-full rounded-md border border-gray-300 p-2  text-sm leading-5 font-medium  capitalize border-[#828FA340] font-Plus focus:border-[#635FC7] focus:outline-none transition ease-in-out duration-150'
                  id='options-menu'
                  aria-haspopup='true'
                  aria-expanded='true'
                  onClick={toggleDropdown}
                >
                  {selectedOption}
                  <svg
                    className='-mr-1 ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </span>
            </div>

            {dropdownOpen && (
              <div className='origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg'>
                <div
                  className={`rounded-md  shadow-xs ${
                    darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#20212C]'
                  }`}
                >
                  <div
                    className='py-1'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='options-menu'
                  >
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => selectOption(option)}
                        className='block px-4 py-2 text-sm leading-5  hover:bg-gray-100 hover:text-gray-900 cursor-pointer'
                        role='menuitem'
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal
