import { useState, useEffect, useRef, ChangeEvent } from 'react'
import { BoardInput, ButtonComponent } from '.'
// import { subtasksProps } from '../interface/interface'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { closeAddTaskModal } from '../features/modal/modalSlice'
import CustomDropDown from './ReusableComponents/CustomDrop'
import {
  createTask,
  updateTask,
} from '../features/Boards/allBoards/allBoardSlice'

// interface SubtasksProp {
//   title: string
//   isCompleted: boolean
// }
// type taskProps = {
//   title: string
//   description: string
//   subTasks: SubtasksProp[]
//   status: string
// }

const AddTask = () => {
  const {
    addTask,
    taskHeader,
    darkMode,
    task: taskValues,
    editTask,
  } = useAppSelector((state) => state.modal)
  const { board } = useAppSelector((state) => state.allboard)
  const col = board?.columns?.find((item) => item.name === taskValues.status)
  console.log(col?._id)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialState = {
    title: '',
    description: '',
    subTasks: [
      {
        title: '',
        isCompleted: false,
      },
    ],
    status: '',
  }
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [subTasks, setSubTasks] = useState([
    {
      title: '',
      isCompleted: false,
    },
  ])

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setTitle(editTask ? taskValues?.title : '')
    setDescription(editTask ? taskValues?.description : '')
    setStatus(editTask ? taskValues?.status : '')
    setSubTasks(
      editTask ? taskValues?.subtasks : [{ title: '', isCompleted: false }]
    )
  }, [editTask, taskValues])

  const dispatch = useAppDispatch()
  console.log(editTask)

  const modalRef = useRef<HTMLDivElement>(null)

  const handleSelected = (selected: string) => {
    setStatus(selected)
  }

  const addSubtask = () => {
    const newSubTask = {
      title: '',
      isCompleted: false,
    }
    setSubTasks([...subTasks, newSubTask])
  }

  const deleteSubtask = (index: number) => {
    if (subTasks.length > 1) {
      const updatedSubTask = subTasks.filter((_, i) => i !== index)
      setSubTasks(updatedSubTask)
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
  }, [addTask, dispatch, initialState])

  const handleSubtaskChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target
    const updatedSubtasks = [...subTasks]
    updatedSubtasks[index] = { ...updatedSubtasks[index], [name]: value }
    setSubTasks(updatedSubtasks)
  }

  const handleSubmit = () => {
    if (!title || !status || !description || !subTasks) {
      setIsError(true)
      return
    }
    if (editTask) {
      dispatch(
        updateTask({
          boardId: board._id,
          columnId: col?._id,
          taskId: taskValues._id,
          task: { title, description, subTasks, status },
        })
      )
      return
    }
    dispatch(
      createTask({
        boardId: board._id,
        task: { title, description, subTasks, status },
      })
    )
    // setTitle('')
    // setDescription('')
    // setSubTasks([{ title: '', isCompleted: false }])
    // setStatus('')
    // setIsError(false)
    // dispatch(getSingleBoard(board._id))
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
              value={title}
              name='title'
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              error={isError}
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className='flex flex-col h-[50px] overflow-y-scroll gap-4 mt-4'>
            {subTasks?.map((item: { title: string }, index: number) => {
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
                    error={isError}
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
          </div>
          <ButtonComponent
            onClick={() => addSubtask()}
            type='button'
            title='+ add new task'
          />
          <div className='relative w-full inline-block text-left'>
            <CustomDropDown
              handleSelected={handleSelected}
              options={board?.columns}
              currentStatus={status}
            />
          </div>
          <ButtonComponent
            onClick={() => handleSubmit()}
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
