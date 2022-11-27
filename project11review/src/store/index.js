import { combineReducers } from 'redux'
import color from './modules/color'
import count from './modules/count'
import changecolor from './modules/changecolor'

export default combineReducers({
  color,
  count,
  changecolor,
})
