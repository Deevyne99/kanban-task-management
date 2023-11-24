import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'

interface UserState {
  user: boolean
  isLoading: boolean
}

const initialState: UserState = {
  user: false,
  isLoading: false,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user) => {
    try {
      const response = await customFetch.post('/auth/register', user)
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
