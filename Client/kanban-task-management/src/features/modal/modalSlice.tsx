import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  isSidebarOpen: boolean
  createBoardModal: boolean
  dropDown: boolean
}
const initialState: ModalProps = {
  isSidebarOpen: true,
  createBoardModal: false,
  dropDown: false,
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
    toggleDropDown: (state) => {
      state.dropDown = !state.dropDown
    },
  },
})

export default modalSlice.reducer
export const { toggleSidebar, toggleCreateBoard, toggleDropDown } =
  modalSlice.actions
