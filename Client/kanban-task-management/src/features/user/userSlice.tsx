import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'
// removeUserFromLocalStorage

interface UserState {
  user: boolean
  isLoading: boolean
}

interface RegisterUser {
  username: string
  email: string
  password: string
}
interface LoginUser {
  email: string
  password: string
}
const initialState: UserState = {
  user: getUserFromLocalStorage(),
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
      console.log(error.response.data.msg)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: LoginUser, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false

      toast.error(`${payload}`)
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      toast.success(`Registration successful please login ${user.username}`)
    })

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false
      toast.error(`${payload}`)
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      toast.success(`welcome ${user.username}`)
      addUserToLocalStorage(user)
    })
  },
  reducers: {},
})
export default userSlice.reducer
