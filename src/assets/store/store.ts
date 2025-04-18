import { configureStore } from '@reduxjs/toolkit'
import { postApi } from './apis/postApi'


export const store = configureStore({
  reducer: {


    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
