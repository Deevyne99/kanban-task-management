import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BoardsProps } from '../../interface/interface'
import customFetch from '../../utils/axios'
import { RootState } from '../../store/store'
import { toast } from 'react-toastify'
import { toggleCreateBoard } from '../modal/modalSlice'
import { useAppDispatch } from '../../hooks/hook'

//import { ThunkAPI } from '@reduxjs/toolkit'

interface State extends BoardsProps {
  loading: boolean
}
// type ThunkAPI = unknown
// type ThunkAPI = unknown

const initialState: State = {
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

export const createBoard = createAsyncThunk<unknown, BoardsProps>(
  'Board/createBoard',
  async (board: BoardsProps, thunkAPI: ThunkAPI<RootState>) => {
    try {
      const resp = await customFetch.post('/board', board, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(toggleCreateBoard())
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
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
        // const dispatch = useAppDispatch()
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
  reducers: {},
})

export default BoardSlice.reducer
