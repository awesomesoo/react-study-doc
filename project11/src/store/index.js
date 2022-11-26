import { combineReducers } from 'redux'
import color from './modules/color'
import count from './modules/count'

export default combineReducers({
  // 키값:
  colorA: color, // colorA: color를 color 라고 써도 된다.
  count,
})
