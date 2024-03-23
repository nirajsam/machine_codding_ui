import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/Counter/index'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})