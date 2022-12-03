import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './modules/color'
import countReducer from './modules/count'

const store = configureStore({
  reducer: {
    colorPage: colorReducer,
    countPage: countReducer,
  },
})

export default store
