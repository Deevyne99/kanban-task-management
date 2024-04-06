import { useEffect, useRef } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import {
  toggleOptions,
  toggleDeleteTask,
  toggleEditTask,
  closeTaskModal,
  handleSelectStatus,
  handleCompletedTask,
} from '../features/modal/modalSlice'
import CustomDropDown from './ReusableComponents/CustomDrop'
// import { updateTask } from '../features/Boards/allBoards/allBoardSlice'

const TaskModal = () => {
  const { taskModal, taskOptions, darkMode, task } = useAppSelector(
    (store) => store.modal
  )
  const { board } = useAppSelector((state) => state.allboard)
  const dispatch = useAppDispatch()
  // const [isCompleted, setIsCompleted] = useState(false)

  const handleCheck = (id: string | undefined) => {
    dispatch(handleCompletedTask(id))
    console.log(task)

    // dispatch(
    //   updateTask({
    //     boardId: board._id,
    //     taskId: task._id,
    //     task: {
    //       title: task.title,
    //       description: task.description,
    //       subtasks: task.subtasks,
    //       status: task.status,
    //     },
    //   })
    // )
  }

  // console.log(isCompleted)

  // console.log(taskval)

  const handleSelected = (option: string) => {
    dispatch(handleSelectStatus(option))
  }

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(closeTaskModal())
      }
    }

    // Attach event listener when modal is open
    if (taskModal) {
      document.addEventListener('mousedown', handleBackdropClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick)
    }
  }, [taskModal, dispatch])

  return (
    <div className='relative'>
      <div
        className={`transition-all duration-500 ${
          taskModal ? 'top-8 sm:top-32 z-30 ' : 'top-[-500px]'
        } fixed ${
          darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
        }  rounded-md  right-0 mx-auto w-[90%] sm:w-[400px] md:w-[450px] left-0 px-4 py-6 flex flex-col`}
        ref={modalRef}
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

          <div className='flex  items-center font-Plus justify-between '>
            <h3 className='font-Plus font-bold '>{task?.title}</h3>
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
              {task?.description}
            </p>
          </div>
          <div className='flex flex-col'>
            <p>Subtasks (2 of 3)</p>
            <div>
              <div className={` flex flex-col gap-2 mt-2`}>
                {task?.subtasks?.map((item) => {
                  return (
                    <div
                      className={` ${
                        darkMode === 'light' ? 'bg-screen' : 'bg-[#20212C]'
                      } flex gap-2 p-2  rounded-[4px] md:items-center    items-baseline`}
                      key={item._id}
                    >
                      <input
                        className='accent-purple border border-[#828FA340]'
                        type='checkbox'
                        name={`${item.isCompleted}`}
                        id={item._id}
                        checked={item.isCompleted}
                        onChange={() => handleCheck(item._id)}
                      />
                      <label htmlFor='' className='text-[14px] '>
                        {item.title}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='relative w-full inline-block text-left'>
            <CustomDropDown
              handleSelected={handleSelected}
              currentStatus={task.status}
              options={board?.columns}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal
