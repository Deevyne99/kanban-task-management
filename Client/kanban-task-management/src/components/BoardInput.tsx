import { FC } from 'react'
import { InputProps } from '../interface/interface'
import { useAppSelector } from '../hooks/hook'

const BoardInput: FC<InputProps> = ({
  type,
  value,
  handleChange,
  name,
  error,
  title,
}) => {
  const { darkMode } = useAppSelector((state) => state.modal)

  return (
    <input
      placeholder={error ? `can't be empty` : `Please enter your ${name}`}
      className={`${
        title === 'columns' || title === 'subtasks' ? 'w-[95%]' : 'w-[100%]'
      } md:w-full  w-[98%]  p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none  ${
        error
          ? 'placeholder:text-error placeholder:font-medium placeholder:text-right'
          : ' border-[#828FA340] '
      } ${error && !value ? 'border-error' : 'border-normal'}
       ${darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'} `}
      type={type}
      value={value}
      name={name}
      // disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default BoardInput
