import { FC } from 'react'
import { ButtonProps } from '../interface/interface'
const ButtonComponent: FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`md:w-[380px] ${
        title === '+ add new column' || title === '+ add new task'
          ? 'bg-opacity-10 text-purple text-opacity-100 w-[220px]'
          : ''
      } 
      sm:w-[350px] text-[#fff]  w-[300px]  p-[8px] bg-[#635FC7] font-semibold capitalize rounded-[24px] hover:bg-[#A8A4FF]`}
      type={type}
    >
      {title}
    </button>
  )
}

export default ButtonComponent
