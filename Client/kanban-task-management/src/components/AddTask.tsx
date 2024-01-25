import { useState } from 'react'
import { BoardInput, ButtonComponent } from '.'
import { subtasksProps } from '../interface/interface'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { toggleAddTask } from '../features/modal/modalSlice'

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
  const { addTask, taskHeader } = useAppSelector((state) => state.modal)
  const [task, setTask] = useState<taskProps>(initialState)
  const dispatch = useAppDispatch()
  return (
    <aside className='relative'>
      <div
        className={`transition-all duration-500 ${
          addTask ? 'top-20 z-30 ' : 'top-[-500px]'
        } fixed bg-white rounded-md  right-0 mx-auto w-[320px] sm:w-[400px]  md:w-[450px] left-0 p-4  flex flex-col`}
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
          <div className=' flex flex-col'>
            <p className='mb-[3px] capitalize'>description</p>
            <textarea
              className='md:w-[380px] p-2 sm:w-[300px] w-[270px] border-[#828FA340] border-[1px] focus:border-[#635FC7] focus:outline-none rounded-md '
              name='description'
              id=''
              cols={30}
              rows={2}
              onChange={() => console.log('hello world')}
              value={task.description}
            ></textarea>
          </div>

          <div className='flex sm:w-[300px] w-[270px] md:w-[410px] gap-y-2 items-center justify-between  gap-4 '>
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
          <div className='flex sm:w-[300px] w-[270px] md:w-[410px] gap-y-2 items-center justify-between  gap-4 '>
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
          <div className=''>
            <select
              className='md:w-[380px] p-2 sm:w-[300px] w-[270px] border-[#828FA340] border-[1px] focus:border-[#635FC7] focus:outline-none rounded-md '
              name='status'
              id='status'
            >
              <option value='todo'>todo</option>
              <option value='doing'>doing</option>
              <option value='done'>done</option>
            </select>
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
