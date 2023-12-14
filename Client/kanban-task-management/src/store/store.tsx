import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import modalSlice from '../features/modal/modalSlice'
import BoardSlice from '../features/Boards/BoardSlice'
export const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    board: BoardSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
