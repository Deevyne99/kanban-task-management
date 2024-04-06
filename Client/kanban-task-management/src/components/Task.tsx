import { useAppSelector } from '../hooks/hook'
import { subtasksProps } from '../interface/interface'
const Task = ({
  title,

  subtasks,
}: {
  title: string

  subtasks: subtasksProps[]
}) => {
  const { darkMode } = useAppSelector((state) => state.modal)
  const completed = subtasks.filter((item) => item.isCompleted === true)
  return (
    <div
      className={`  w-[300px] p-4 flex flex-col gap-2 cursor-pointer shadow-lg rounded-md  ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      }`}
      onClick={() => console.log('hello world')}
    >
      <h4 className='font-bold font-Plus capitalize'>{title}</h4>
      <p className='text-[#828FA3] font-semibold'>
        <span>{completed.length}</span> of <span>{subtasks.length}</span>{' '}
        subtask
      </p>
    </div>
  )
}

export default Task
