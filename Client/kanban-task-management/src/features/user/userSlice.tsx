import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'

interface UserState {
  user: boolean
  isLoading: boolean
}

interface RegisterUser {
  name: string
  email: string
  password: string
}
interface LoginUser {
  email: string
  password: string
}
const initialState: UserState = {
  user: false,
  isLoading: false,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user: RegisterUser, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/register', user)
      console.log(response.data)

      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const loginUser = createAsyncThunk(
  'user/registerUser',
  async (user: LoginUser, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})
export default userSlice.reducer
