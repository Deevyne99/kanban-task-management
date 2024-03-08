import { useState, useEffect, useRef } from 'react'
import { BoardInput, ButtonComponent } from '.'
import { subtasksProps } from '../interface/interface'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { toggleAddTask, closeAddTaskModal } from '../features/modal/modalSlice'
import CustomDropDown from './ReusableComponents/CustomDrop'

const initialState = {
  title: '',
  description: '',
  subtasks: [
    {
      title: '',
      isCompleted: false,
    },
  ],
}

interface SubtasksProp {
  title: string
  isCompleted: boolean
}
type taskProps = {
  title: string
  description: string
  subtasks: SubtasksProp[]
}

const AddTask = () => {
  const { addTask, taskHeader, darkMode } = useAppSelector(
    (state) => state.modal
  )
  const [task, setTask] = useState<taskProps>(initialState)
  const options = ['todo', 'doing', 'done']
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const dispatch = useAppDispatch()

  const modalRef = useRef(null)

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (!modalRef.current.contains(e.target)) {
        dispatch(closeAddTaskModal())
      }
    }

    // Attach event listener when modal is open
    if (addTask) {
      document.addEventListener('mousedown', handleBackdropClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick)
    }
  }, [addTask, dispatch])

  return (
    <aside className='relative'>
      <div
        className={`transition-all duration-500 ${
          addTask ? 'top-28 z-30 ' : 'top-[-600px]'
        } fixed  ${
          darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
        } rounded-md  right-0 mx-auto w-[80%]  md:w-[450px] left-0 p-4  flex flex-col`}
        ref={modalRef}
      >
        <h2 className='font-Plus font-semibold capitalize ml-2'>
          {taskHeader}
        </h2>
        <div className='flex ml-2 flex-col  gap-4 mt-2'>
          <div className=''>
            <p className='gap-2 mb-[3px] capitalize'>title</p>
            <BoardInput
              type='text'
              value={task.title}
              name='title'
              handleChange={() => console.log('hello')}
            />
          </div>
          <div className=' flex flex-col w-full'>
            <p className='mb-[3px] capitalize'>description</p>
            <textarea
              className={`md:w-full p-2 w-[100%] border-[#828FA340] border-[1px] focus:border-[#635FC7] focus:outline-none rounded-md  ${
                darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
              } `}
              name='description'
              id=''
              cols={30}
              rows={2}
              onChange={() => console.log('hello world')}
              value={task.description}
            ></textarea>
          </div>

          <div className='flex w-full gap-y-2 items-center justify-between  gap-4 '>
            <BoardInput
              value={task.description}
              type='text'
              name='name'
              title='subtasks'
              handleChange={() => console.log('helloe')}
            />
            <button
              className='flex items-center mt-1'
              onClick={() => console.log('hello world')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <rect
                  x='12.728'
                  width='3'
                  height='18'
                  transform='rotate(45 12.728 0)'
                  fill='#828FA3'
                />
                <rect
                  y='2.12109'
                  width='3'
                  height='18'
                  transform='rotate(-45 0 2.12109)'
                  fill='#828FA3'
                />
              </svg>
            </button>
          </div>
          <div className='flex w-full gap-y-2 items-center justify-between  gap-4 '>
            <BoardInput
              value={task.description}
              type='text'
              name='name'
              title='subtasks'
              handleChange={() => console.log('helloe')}
            />
            <button
              className='flex items-center mt-1'
              onClick={() => console.log('hello world')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <rect
                  x='12.728'
                  width='3'
                  height='18'
                  transform='rotate(45 12.728 0)'
                  fill='#828FA3'
                />
                <rect
                  y='2.12109'
                  width='3'
                  height='18'
                  transform='rotate(-45 0 2.12109)'
                  fill='#828FA3'
                />
              </svg>
            </button>
          </div>
          <ButtonComponent
            onClick={() => console.log('hello world')}
            type='button'
            title='+ add new task'
          />
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
                  {options[0]}
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
              <CustomDropDown
                options={options}
                closeDropDown={() => setDropdownOpen(false)}
              />
            )}
          </div>
          <ButtonComponent
            onClick={() => dispatch(toggleAddTask())}
            type='button'
            title={
              taskHeader === 'Add new task' ? 'create task' : 'save changes'
            }
          />
        </div>
      </div>
    </aside>
  )
}

export default AddTask
