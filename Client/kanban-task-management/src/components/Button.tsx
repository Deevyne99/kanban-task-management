import { FC } from 'react'
import { ButtonProps } from '../interface/interface'
const Button: FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=' text-[#fff]  w-[180px]  p-[10px] bg-[#635FC7] font-semibold capitalize rounded-[24px] hover:bg-[#A8A4FF]'
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
