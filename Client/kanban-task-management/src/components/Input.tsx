import { FC } from 'react'

import { InputProps } from '../interface/interface'
const InputComponent: FC<InputProps> = ({
  type,
  value,
  handleChange,
  name,
  error,
  title,
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='capitalize text-[#828FA3]'>
        {name}
      </label>

      <input
        placeholder={error ? `can't be empty` : `Please enter your ${name}`}
        className={`${
          title === 'columns' ? 'md:w-[340px]' : 'w-[300px]'
        } md:w-[380px] sm:w-[350px]  w-[300px]  p-[8px] border rounded-md border-solid border-[#828FA340] font-normal focus:border-[#635FC7] focus:outline-none ${
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
    </div>
  )
}

export default InputComponent
