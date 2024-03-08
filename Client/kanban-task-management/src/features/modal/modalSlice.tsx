import { createSlice } from '@reduxjs/toolkit'
import { getThemeFromLocalStorage } from '../../utils/localStorage'
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
  darkMode: string
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
  darkMode: getThemeFromLocalStorage() || '',
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
    toggleDarkMode: (state) => {
      let darkMode
      if (state.darkMode === 'dark') {
        darkMode = 'light'
        state.darkMode = darkMode
      } else if (state.darkMode === 'light') {
        darkMode = 'dark'
        state.darkMode = darkMode
      }
    },
    closeCreateBoardModal: (state) => {
      state.createBoardModal = false
    },
    closeTaskModal: (state) => {
      state.taskModal = false
    },
    closeDropDownModal: (state) => {
      state.dropDown = false
    },
    closeAddTaskModal: (state) => {
      state.addTask = false
    },
    closeSmallSidebar: (state) => {
      state.smallSidebar = false
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
  toggleDarkMode,
  closeCreateBoardModal,
  closeTaskModal,
  closeDropDownModal,
  closeAddTaskModal,
  closeSmallSidebar,
} = modalSlice.actions
