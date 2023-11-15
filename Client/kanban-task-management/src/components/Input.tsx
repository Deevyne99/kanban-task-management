import { FC } from 'react'

import { InputProps } from '../interface/interface'
const InputComponent: FC<InputProps> = ({
  type,
  value,
  handleChange,
  name,
  // disabled,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      // disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default InputComponent
