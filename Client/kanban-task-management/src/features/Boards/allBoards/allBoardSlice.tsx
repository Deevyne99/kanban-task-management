import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../../utils/axios'
import { RootState } from '../../../store/store'

const initialState = {
  isLoading: false,
  boards: [],
}

export const getAllBoard = createAsyncThunk(
  'boards/getAllBoard',
  async (_, thunkAPI) => {
    try {
      const { data } = await customFetch.get('/board', {
        headers: {
          authorization: `Bearer ${
            (thunkAPI.getState() as RootState).user.user.token
          }`,
        },
      })
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      // toast.error(error)
    }
  }
)

const allBoardSlice = createSlice({
  name: 'allBoardSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllBoard.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllBoard.fulfilled, (state, { payload }) => {
      state.isLoading = false
      console.log(payload)
      state.boards = payload.boards
      console.log(state.boards)
    })
    builder.addCase(getAllBoard.rejected, (state) => {
      state.isLoading = false
      toast.error('something went wrong')
    })
  },
  reducers: {},
})

export default allBoardSlice.reducer
