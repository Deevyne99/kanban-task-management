import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BoardsProps } from '../../interface/interface'
import customFetch from '../../utils/axios'
import { RootState } from '../../store/store'
import { toast } from 'react-toastify'
import { toggleCreateBoard } from '../modal/modalSlice'
import { getAllBoard } from './allBoards/allBoardSlice'

const initialState: BoardsProps & { loading: boolean } = {
  boardName: '',
  columns: [
    {
      name: '',
      tasks: [
        {
          title: '',
          description: '',
          subtasks: [{ title: '', isCompleted: false }],
          status: '',
        },
      ],
    },
  ],
  loading: false,
}

export const createBoard = createAsyncThunk(
  'Board/createBoard',
  async (board: BoardsProps, { getState, dispatch, rejectWithValue }) => {
    try {
      const { token } = (getState() as RootState).user.user
      const resp = await customFetch.post('/board', board, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      dispatch(toggleCreateBoard())
      dispatch(getAllBoard())
      return resp.data
    } catch (error) {
      return rejectWithValue(error.response.data.msg)
    }
  }
)

const BoardSlice = createSlice({
  name: 'Boardslice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.pending, (state) => {
        state.loading = true
      })
      .addCase(createBoard.fulfilled, (state, { payload }) => {
        state.loading = false
        console.log(payload)
        toast.success('board created successfully')
      })
      .addCase(createBoard.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
        toast.error(`${payload}`)
      })
  },
  reducers: {
    addColumn: (state) => {
      state.columns.push({
        name: '',
        tasks: [
          {
            title: '',
            description: '',
            subtasks: [{ title: '', isCompleted: false }],
            status: '',
          },
        ],
      })
    },
  },
})

export default BoardSlice.reducer
export const { addColumn } = BoardSlice.actions
