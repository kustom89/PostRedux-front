/* eslint-disable @typescript-eslint/no-explicit-any */
// postSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  posts: any[] // O especificar el tipo si conoces la forma de los datos
  isLoading: boolean
}

const initialState: PostState = {
  posts: [],
  isLoading: false
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    starLoadingPosts: (state) => {
      state.isLoading = true
    },
    setPosts: (state, action: PayloadAction<any[]>) => {
      state.isLoading = false
      state.posts = action.payload // Aquí guardamos los datos obtenidos
    },
  },
})

export const { starLoadingPosts, setPosts } = postSlice.actions
export default postSlice.reducer
