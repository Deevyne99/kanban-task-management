import InputComponent from '../components/Input'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { UserProps } from '../interface/interface'
import logo from '../assets/logo.png'
import ButtonComponent from '../components/FormButton'
// import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { loginUser, registerUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

// import React from 'react'
const initialState = {
  username: '',
  email: '',
  password: '',
  isMember: false,
  isError: false,
}

const Register = () => {
  const [values, setValues] = useState<UserProps>(initialState)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.user)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, email, password, isMember } = values
    if (!email || !password || (!isMember && !username)) {
      setValues({ ...values, isError: true })
      // toast.error('Please enter all fields')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ username, email, password }))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  useEffect(() => {
    if (user) {
      navigate('/board')
    }
  }, [user, navigate])

  return (
    <main className='bg-[#F4F7FD] h-screen mx-auto flex justify-center items-center flex-col gap-4'>
      <img src={logo} alt='kanban' />
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {!values.isMember && (
          <InputComponent
            type='text'
            name='username'
            value={values.username}
            handleChange={handleChange}
            error={values.isError}
          />
        )}
        <InputComponent
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          error={values.isError}
        />
        <InputComponent
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          error={values.isError}
        />
        <div className='mt-4'>
          <ButtonComponent type='submit' title={`submit`} />
        </div>
        <div className='flex justify-center items-center '>
          <p className='text-sm text-[#828FA3] font-semibold'>
            {values.isMember ? 'Not a member yet ? ' : 'Already a member ? '}

            <button
              type='button'
              onClick={toggleMember}
              className='text-[#635FC7]'
            >
              {values.isMember ? ' Register' : ' Login'}
            </button>
          </p>
        </div>
      </form>
    </main>
  )
}

export default Register
