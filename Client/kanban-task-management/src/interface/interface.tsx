import { ChangeEvent } from 'react'

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  value: string | number
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  title?: string
  // disabled?: boolean
}
export interface UserProps {
  username: string
  email: string
  password: string
  isMember: boolean
  isError: boolean
}
export interface ButtonProps {
  title: string
  type: 'button' | 'submit'
  onClick?: () => void
  img?: string
}

export interface subtasksProps {
  title: string
  isCompleted: boolean
}

export interface TasksProps {
  title: string
  description: string
  subtasks: subtasksProps[]
  status: string
}

export interface ColumnProps {
  name: string
  tasks: TasksProps[]
}

export interface BoardsProps {
  boardName: string
  columns: ColumnProps[]
}
