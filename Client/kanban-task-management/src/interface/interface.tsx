import { ChangeEvent } from 'react'

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  value: string | number
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  // error: boolean
  // disabled?: boolean
}
export interface UserProps {
  name: string
  email: string
  password: string | number
  isMember: boolean
}
