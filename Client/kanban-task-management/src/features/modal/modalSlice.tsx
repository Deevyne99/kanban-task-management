import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  isSidebarOpen: boolean
}
const initialState: ModalProps = {
  isSidebarOpen: true,
}
const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
  },
})

export default modalSlice.reducer
export const { toggleSidebar } = modalSlice.actions
