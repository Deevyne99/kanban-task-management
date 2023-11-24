import { FC } from 'react'

import { InputProps } from '../interface/interface'
const InputComponent: FC<InputProps> = ({
  type,
  value,
  handleChange,
  name,
  error,
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='capitalize text-[#828FA3]'>
        {name}
      </label>
      <input
        placeholder={error ? `can't be empty` : `Please enter your ${name}`}
        className={`md:w-[380px] sm:w-[350px]  w-[280px]  p-[8px] border rounded-md border-solid border-[#828FA340] ${
          error
            ? 'placeholder:text-error font-semibold placeholder:text-right'
            : 'text-normal border-[#828FA340] '
        } ${error && !value ? 'border-error' : 'border-normal'}`}
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
