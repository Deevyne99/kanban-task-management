import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../../utils/axios'
import { RootState } from '../../../store/store'
import { BoardsProps } from '../../../interface/interface'
import { Key } from 'react'

interface SubtasksProps {
  title: string
  isCompleted?: boolean
}

interface TaskProps {
  title: string
  description: string
  status: string
  subTasks: SubtasksProps[]
}
interface AllBoardsProps {
  board: BoardsProps
  isLoading: boolean
  boards: BoardsProps[]
  loading: boolean
  tasks: TaskProps[]
}

const initialState: AllBoardsProps = {
  isLoading: false,
  boards: [],
  board: { boardName: '', columns: [] },
  loading: false,
  tasks: [
    {
      title: '',
      description: '',
      status: '',
      subTasks: [{ title: '', isCompleted: false }],
    },
  ],
}
type boardId = Key | null | undefined

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

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async (
    { boardId, board }: { boardId: boardId; board: BoardsProps },
    thunkAPI
  ) => {
    try {
      const { data } = await customFetch.patch(`/board/${boardId}`, board, {
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
      state.board = payload.boards[0]
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
      state.board = payload?.board
      // console.log(state.boards)
    })
    builder.addCase(getSingleBoard.rejected, (state) => {
      state.loading = false
      toast.error('something went wrong')
    })
    builder.addCase(updateBoard.pending, (state) => {
      state.loading = true
      toast.loading('updating')
    })
    builder.addCase(updateBoard.fulfilled, (state, { payload }) => {
      state.loading = false
      console.log(payload)

      toast.dismiss()
      toast.success('updated successfully')
    })
    builder.addCase(updateBoard.rejected, (state, { payload }) => {
      toast.dismiss()
      state.loading = false
      toast.error(`${payload}`)
    })
  },
  reducers: {},
})

export default allBoardSlice.reducer
