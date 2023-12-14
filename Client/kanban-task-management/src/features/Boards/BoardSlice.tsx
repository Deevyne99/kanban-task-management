import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BoardsProps } from '../../interface/interface'
import customFetch from '../../utils/axios'
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
// import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'

const initialState: BoardsProps = {
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
}

export const createBoard = createAsyncThunk(
  'Board/createBoard',
  async (board, thunkAPI: GetThunkAPI<AsyncThunkConfig>) => {
    try {
      const resp = await customFetch.post('/board', board, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// eslint-disable-next-line react-refresh/only-export-components
const BoardSlice = createSlice({
  name: 'Boardslice',
  initialState,
  reducers: {},
})

export default BoardSlice.reducer
