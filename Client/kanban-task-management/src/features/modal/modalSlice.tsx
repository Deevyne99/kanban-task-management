import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  isSidebarOpen: boolean
  createBoardModal: boolean
  dropDown: boolean
  smallSidebar: boolean
  addTask: boolean
  deleteBoard: boolean
  taskModal: boolean
  taskOptions: boolean
  deleteCategory: string
  boardHeader: string
  taskHeader: string
}
const initialState: ModalProps = {
  isSidebarOpen: true,
  createBoardModal: false,
  dropDown: false,
  smallSidebar: false,
  addTask: false,
  deleteBoard: false,
  taskModal: false,
  taskOptions: false,
  deleteCategory: 'board',
  boardHeader: 'Add new board',
  taskHeader: 'Add new task',
}
const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    toggleCreateBoard: (state) => {
      state.createBoardModal = !state.createBoardModal
      state.dropDown = false
      state.smallSidebar = false
      state.addTask = false
      state.boardHeader = 'Add new board'
    },
    toggleEditBoard: (state) => {
      state.createBoardModal = !state.createBoardModal
      state.dropDown = false
      state.smallSidebar = false
      state.addTask = false
      state.boardHeader = 'Edit board'
    },
    toggleDropDown: (state) => {
      state.addTask = false
      state.dropDown = !state.dropDown
      state.smallSidebar = false
    },
    toggleSmallSidebar: (state) => {
      state.addTask = false
      state.smallSidebar = !state.smallSidebar
      state.dropDown = false
    },
    toggleAddTask: (state) => {
      state.addTask = !state.addTask
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.taskHeader = 'Add new task'
    },
    toggleEditTask: (state) => {
      state.addTask = !state.addTask
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.taskHeader = 'Edit task'
      state.taskModal = false
      state.taskOptions = false
    },
    toggleDeleteTask: (state) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteBoard = !state.deleteBoard
      state.deleteCategory = 'task'
      state.taskModal = false
      state.taskOptions = false
    },
    toggleDeleteBoard: (state) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteBoard = !state.deleteBoard
      state.taskModal = false
      state.deleteCategory = 'board'
    },
    toggleTask: (state) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteBoard = false
      state.taskModal = !state.taskModal
    },
    toggleOptions: (state) => {
      state.taskOptions = !state.taskOptions
    },
  },
})

export default modalSlice.reducer
export const {
  toggleSidebar,
  toggleCreateBoard,
  toggleDropDown,
  toggleSmallSidebar,
  toggleAddTask,
  toggleDeleteTask,
  toggleDeleteBoard,
  toggleTask,
  toggleOptions,
  toggleEditBoard,
  toggleEditTask,
} = modalSlice.actions
