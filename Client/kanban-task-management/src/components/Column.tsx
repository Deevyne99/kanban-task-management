import { FC, useState } from 'react'
import { ColumnProps } from '../interface/interface'
import Task from './Task'

const Column: FC<ColumnProps> = ({ name }) => {
  const colors: string[] = [
    'red-500',
    'orange-500',
    'blue-500',
    'purple-500',
    'green-500',
    'indigo-500',
    'yellow-500',
    'pink-500',
    'sky-500',
  ]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [color, setColor] = useState(colors[5])
  // console.log(color[0])

  return (
    <section className='flex flex-col gap-4'>
      <div
        className={`text-[#828FA3] flex items-center gap-2 font-Plus capitalize w-[300px]`}
      >
        <div className={`h-[15px] w-[15px] rounded-full bg-${color}`}></div>
        <p className='flex gap-2 tracking-[2.4px]'>
          {name} <span>(14)</span>
        </p>
      </div>
      <Task />
      <Task />
    </section>
  )
}
export default Column
