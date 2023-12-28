import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  isSidebarOpen: boolean
  createBoardModal: boolean
}
const initialState: ModalProps = {
  isSidebarOpen: true,
  createBoardModal: false,
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
    },
  },
})

export default modalSlice.reducer
export const { toggleSidebar, toggleCreateBoard } = modalSlice.actions
