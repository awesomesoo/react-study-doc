import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './modules/color'
import countReducer from './modules/count'
import colorChange from './modules/changecolor'
import todos from './modules/todos'

const store = configureStore({
  reducer: {
    colorPage: colorReducer,
    countPage: countReducer,
    colorChange,
    todos,
  },
})

export default store
