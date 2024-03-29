import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hook'
import { toggleCustomDrop } from '../../features/modal/modalSlice'

interface CustomDropDownProps {
  handleSelected: (selected: string) => void // Define prop type
  currentStatus?: string
}
const CustomDropDown = ({
  handleSelected,
  currentStatus,
}: CustomDropDownProps) => {
  const { darkMode, dropdownOpen } = useAppSelector((state) => state.modal)
  const { board } = useAppSelector((state) => state.allboard)
  const [selectedOption, setSelectedOption] = useState(currentStatus)

  const dispatch = useAppDispatch()

  const selectOption = (option: string) => {
    setSelectedOption(option)
    handleSelected(option)
    dispatch(toggleCustomDrop())
  }

  // useEffect(() => {
  //   if (addTask === false) {
  //     setSelectedOption('')
  //     return
  //   }
  // }, [addTask, taskModal])

  return (
    <div className=''>
      <div>
        <span className='rounded-md '>
          <button
            type='button'
            className='inline-flex justify-between w-full rounded-md border border-gray-300 p-2  text-sm leading-5 font-medium  capitalize border-[#828FA340] font-Plus focus:border-[#635FC7] focus:outline-none transition ease-in-out duration-150'
            id='options-menu'
            aria-haspopup='true'
            aria-expanded='true'
            onClick={() => dispatch(toggleCustomDrop())}
          >
            {selectedOption ? selectedOption : 'Select Status'}
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
              {board.columns?.map((option) => (
                <div
                  key={option.name}
                  onClick={() => selectOption(option.name)}
                  className='block px-4 py-2 text-sm leading-5  hover:bg-gray-100 hover:text-gray-900 cursor-pointer'
                  role='menuitem'
                >
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomDropDown
