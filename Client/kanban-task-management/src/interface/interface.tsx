import { ChangeEvent } from 'react'

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  value: string | number | boolean
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
  // disabled?: boolean
}
export interface UserProps {
  name: string
  email: string
  password: string
  isMember: boolean
  isError: boolean
}
export interface ButtonProps {
  title: string
  type: 'button' | 'submit'
  onClick?: () => void
}
