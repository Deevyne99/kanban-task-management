import { createSlice } from '@reduxjs/toolkit'
import { getThemeFromLocalStorage } from '../../utils/localStorage'
import { TasksProps } from '../../interface/interface'
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
  editBoard: boolean
  dropdownOpen: boolean
  task: TasksProps
  editTask: boolean
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
  editBoard: false,
  dropdownOpen: false,
  task: { title: '', description: '', subtasks: [], status: '' },
  editTask: false,
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
      state.editBoard = true
    },
    closeDropDownModal: (state) => {
      if (state.dropDown === true) {
        state.dropDown = false
      }
    },
    toggleDropDown: (state) => {
      state.addTask = false
      state.dropDown = true
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
      state.editTask = !state.editTask
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
    toggleTask: (state, { payload }) => {
      state.addTask = false
      state.smallSidebar = false
      state.dropDown = false
      state.createBoardModal = false
      state.deleteBoard = false
      state.taskModal = !state.taskModal
      state.task = payload
    },
    handleSelectStatus: (state, { payload }) => {
      state.task.status = payload
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
      state.editBoard = false
    },
    closeTaskModal: (state) => {
      state.taskModal = false
      // state.task = { title: '', description: '', subtasks: [], status: '' }
    },

    closeAddTaskModal: (state) => {
      state.addTask = false
    },
    closeSmallSidebar: (state) => {
      state.smallSidebar = false
    },
    toggleCustomDrop: (state) => {
      state.dropdownOpen = !state.dropdownOpen
    },
    closeCustomDrop: (state) => {
      state.dropdownOpen = false
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
  toggleCustomDrop,
  handleSelectStatus,
} = modalSlice.actions
