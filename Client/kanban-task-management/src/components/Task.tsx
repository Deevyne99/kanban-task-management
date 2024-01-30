import { useAppSelector } from '../hooks/hook'

const Task = () => {
  const { darkMode } = useAppSelector((state) => state.modal)
  return (
    <div
      className={`  w-[300px] p-4 flex flex-col gap-2 shadow-lg rounded-md  ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      }`}
      onClick={() => console.log('hello world')}
    >
      <h4 className='font-bold font-Plus '>Build UI for onboarding flow</h4>
      <p className='text-[#828FA3] font-semibold'>
        <span>0</span> of <span>3</span> subtask
      </p>
    </div>
  )
}

export default Task
