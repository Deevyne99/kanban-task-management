import { useAppSelector } from '../hooks/hook'

const AddColumn = () => {
  const { darkMode } = useAppSelector((state) => state.modal)
  return (
    <div
      className={`mt-10 rounded-[8px] p-2 min-w-[290px] flex items-center justify-center  ${
        darkMode === 'light'
          ? 'bg-[#E9EFFA]'
          : 'bg-gradient-to-b from-[rgba(43,44,55,0.25)] to-[rgba(43,44,55,0.13)]'
      }`}
    >
      <button className='capitalize text-[#828FA3] font-Plus font-bold'>
        + new Column
      </button>
    </div>
  )
}

export default AddColumn
