import InputComponent from '../components/Input'
import { useState, ChangeEvent } from 'react'
import { UserProps } from '../interface/interface'
// import React from 'react'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}
const Register = () => {
  const [values, setValues] = useState<UserProps>(initialState)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  return (
    <main>
      <form className='bg-red-500'>
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
      </form>
    </main>
  )
}

export default Register
