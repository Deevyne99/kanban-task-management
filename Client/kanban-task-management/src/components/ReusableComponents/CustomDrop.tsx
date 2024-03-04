import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hook'

type OptionsType = { options: string[]; closeDropDown: () => void }

const CustomDropDown = ({ options, closeDropDown }: OptionsType) => {
  const { darkMode } = useAppSelector((state) => state.modal)
  const [selectedOption, setSelectedOption] = useState('Select Status')

  const selectOption = (option: string) => {
    setSelectedOption(option)
    closeDropDown()
  }

  return (
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
          {options.map((option: string) => (
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
  )
}

export default CustomDropDown
