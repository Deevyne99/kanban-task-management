import { FC } from 'react'
import { InputProps } from '../interface/interface'

const BoardInput: FC<InputProps> = ({
  type,
  value,
  handleChange,
  name,
  error,
  title,
}) => {
  return (
    <input
      placeholder={error ? `can't be empty` : `Please enter your ${name}`}
      className={`${
        title === 'columns' || title === 'subtasks'
          ? 'md:w-[350px] w-[270px] sm:w-[320px]'
          : 'w-[270px]'
      } md:w-[380px] sm:w-[300px] w-[270px]   p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none  ${
        error
          ? 'placeholder:text-error placeholder:font-medium placeholder:text-right'
          : 'text-normal border-[#828FA340] '
      } ${error && !value ? 'border-error' : 'border-normal'}
      `}
      type={type}
      value={value}
      name={name}
      // disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default BoardInput
