// import { useState } from 'react'
// import { ColumnProps } from '../interface/interface'
import Task from './Task'
import { useAppDispatch } from '../hooks/hook'
import { toggleTask } from '../features/modal/modalSlice'
import { TasksProps } from '../interface/interface'
const Column = ({
  name,
  tasks,
  color,
}: {
  name: string
  tasks: TasksProps[]
  color: string
}) => {
  const dispatch = useAppDispatch()
  const taskVar = tasks.filter((item) => item.status === name)
  console.log(taskVar)

  // console.log(tasks)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // console.log(color[0])

  return (
    <section className='flex flex-col gap-4'>
      <div
        className={`text-[#828FA3] flex items-center gap-2 font-Plus capitalize w-[300px]`}
      >
        <div className={`h-[15px] w-[15px] rounded-full bg-${color}`}></div>
        <p className='flex gap-2 tracking-[2.4px]'>
          {name} <span>({tasks.length})</span>
        </p>
      </div>
      {taskVar.map((item, index) => {
        return (
          <div key={index} onClick={() => dispatch(toggleTask(item))}>
            <Task title={item.title} subtasks={item.subtasks} />
          </div>
        )
      })}
    </section>
  )
}
export default Column
