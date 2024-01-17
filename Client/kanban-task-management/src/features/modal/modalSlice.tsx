import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  isSidebarOpen: boolean
  createBoardModal: boolean
  dropDown: boolean
  smallSidebar: boolean
  addTask: boolean
  deleteTask: boolean
  deleteBoard: boolean
  taskModal: boolean
}
const initialState: ModalProps = {
  isSidebarOpen: true,
  createBoardModal: false,
  dropDown: false,
  smallSidebar: false,
  addTask: false,
  deleteTask: false,
  deleteBoard: false,
  taskModal: false,
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
    },
    toggleDeleteTask: (state) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteTask = !state.deleteTask
    },
    toggleDeleteBoard: (state) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteTask = false
      state.deleteBoard = !state.deleteBoard
    },
    toggleTask: (state) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteTask = false
      state.deleteBoard = false
      state.taskModal = !state.taskModal
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
} = modalSlice.actions
