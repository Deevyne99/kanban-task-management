import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  isSidebarOpen: boolean
  createBoardModal: boolean
  dropDown: boolean
  smallSidebar: boolean
}
const initialState: ModalProps = {
  isSidebarOpen: true,
  createBoardModal: false,
  dropDown: false,
  smallSidebar: false,
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
    },
    toggleDropDown: (state) => {
      state.dropDown = !state.dropDown
      state.smallSidebar = false
    },
    toggleSmallSidebar: (state) => {
      state.smallSidebar = !state.smallSidebar
      state.dropDown = false
    },
  },
})

export default modalSlice.reducer
export const {
  toggleSidebar,
  toggleCreateBoard,
  toggleDropDown,
  toggleSmallSidebar,
} = modalSlice.actions
