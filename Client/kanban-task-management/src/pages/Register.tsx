import InputComponent from '../components/Input'
import { useState, ChangeEvent, FormEvent } from 'react'
import { UserProps } from '../interface/interface'
import logo from '../assets/logo.png'
import ButtonComponent from '../components/Button'
import { toast } from 'react-toastify'

// import React from 'react'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}
const Register = () => {
  const [values, setValues] = useState<UserProps>(initialState)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, password } = values
    if (!name || !email || !password) {
      console.log('please enter all fields')
      toast.error('please enter all')
      return
    }
    console.log(values)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  return (
    <main className='bg-[#F4F7FD] h-screen mx-auto flex justify-center items-center flex-col gap-4'>
      <img src={logo} alt='kanban' />
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <InputComponent
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        <InputComponent
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <InputComponent
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <div className='mt-4'>
          <ButtonComponent type='submit' title={`submit`} />
        </div>
      </form>
    </main>
  )
}

export default Register
