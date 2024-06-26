import { ChangeEvent, Key } from 'react'

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
  _id?: string
}

export interface TasksProps {
  title: string
  description: string
  subtasks: subtasksProps[]
  status: string
  _id?: string
}

export interface ColumnProps {
  name: string
  _id?: string
}

export interface BoardsProps {
  _id?: Key | null | undefined
  boardName: string
  columns: ColumnProps[]
  tasks: TasksProps[]
}
