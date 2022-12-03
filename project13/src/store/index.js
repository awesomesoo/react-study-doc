import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './modules/color'

const store = configureStore({
  reducer: {
    colorPage: colorReducer,
  },
})

export default store
