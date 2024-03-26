import { useState, useEffect, useRef } from 'react'
import { BoardInput, ButtonComponent } from '.'
// import { subtasksProps } from '../interface/interface'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { toggleAddTask, closeAddTaskModal } from '../features/modal/modalSlice'
import CustomDropDown from './ReusableComponents/CustomDrop'

interface SubtasksProp {
  title: string
  isCompleted: boolean
}
type taskProps = {
  title: string
  description: string
  subtasks: SubtasksProp[]
  status: string
}

const AddTask = () => {
  const { addTask, taskHeader, darkMode } = useAppSelector(
    (state) => state.modal
  )
  const initialState = {
    title: '',
    description: '',
    subtasks: [
      {
        title: '',
        isCompleted: false,
      },
    ],
    status: '',
  }
  const [task, setTask] = useState<taskProps>(initialState)

  const dispatch = useAppDispatch()

  const modalRef = useRef<HTMLDivElement>(null)

  const handleTaskChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }))
  }

  const handleSelected = (selected: string) => {
    setTask((prev) => ({ ...prev, status: selected }))
  }

  const addSubtask = () => {
    setTask((prevTask) => ({
      ...prevTask,
      subtasks: [
        ...prevTask.subtasks,
        {
          title: '',
          isCompleted: false,
        },
      ],
    }))
  }

  const deleteSubtask = (index: number) => {
    if (task.subtasks.length > 1) {
      setTask((prevTask) => ({
        ...prevTask,
        subtasks: prevTask.subtasks.filter((_, i) => i !== index),
      }))
    }
  }

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
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
  console.log(task)

  const handleSubtaskChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target
    setTask((prevTask) => ({
      ...prevTask,
      subtasks: prevTask.subtasks.map((subtask, i) =>
        i === index ? { ...subtask, [name]: value } : subtask
      ),
    }))
  }

  return (
    <aside className='relative'>
      <div
        className={`transition-all duration-500 ${
          addTask ? 'top-16 z-30 ' : 'top-[-600px]'
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
              handleChange={(e) => handleTaskChange(e)}
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
              onChange={handleTaskChange}
              value={task.description}
            ></textarea>
          </div>
          {task.subtasks?.map((item, index) => {
            return (
              <div
                key={index}
                className='flex w-full gap-y-2 items-center justify-between  gap-4 '
              >
                <BoardInput
                  value={item.title}
                  type='text'
                  name='title'
                  title='subtasks'
                  handleChange={(e) => handleSubtaskChange(e, index)}
                />
                <button
                  className='flex items-center mt-1'
                  onClick={() => deleteSubtask(index)}
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
            )
          })}

          <ButtonComponent
            onClick={() => addSubtask()}
            type='button'
            title='+ add new task'
          />
          <div className='relative w-full inline-block text-left'>
            <CustomDropDown handleSelected={handleSelected} />
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
