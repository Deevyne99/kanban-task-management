import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../../utils/axios'
import { RootState } from '../../../store/store'
import { BoardsProps } from '../../../interface/interface'
import { Key } from 'react'
interface AllBoardsProps {
  board: BoardsProps
  isLoading: boolean
  boards: BoardsProps[]
  loading: boolean
}

const initialState: AllBoardsProps = {
  isLoading: false,
  boards: [],
  board: { boardName: '', columns: [] },
  loading: false,
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
export const getSingleBoard = createAsyncThunk(
  'boards/getSingleBoard',
  async (boardId: Key | null | undefined, thunkAPI) => {
    try {
      const { data } = await customFetch.get(`/board/${boardId}`, {
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

    builder.addCase(getSingleBoard.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getSingleBoard.fulfilled, (state, { payload }) => {
      state.loading = false
      console.log(payload)
      state.board = payload.board
      // console.log(state.boards)
    })
    builder.addCase(getSingleBoard.rejected, (state) => {
      state.loading = false
      toast.error('something went wrong')
    })
  },
  reducers: {},
})

export default allBoardSlice.reducer
