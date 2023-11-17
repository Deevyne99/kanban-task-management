import { FC } from 'react'
import { ButtonProps } from '../interface/interface'
const ButtonComponent: FC<ButtonProps> = ({ title, type }) => {
  return (
    <button
      className='md:w-[380px] sm:w-[350px] text-[#fff]  w-[280px]  p-[8px] bg-[#635FC7] font-semibold capitalize rounded-[24px] hover:bg-[#A8A4FF]'
      type={type}
    >
      {title}
    </button>
  )
}

export default ButtonComponent
