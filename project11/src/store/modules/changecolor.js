const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

// color 를 받아온다.
// export const changecolor = color => ({ type: CHANGE_COLOR, zzz: color })
// export const changecolor = color => ({ type: CHANGE_COLOR, color: color })
export const changecolor = color => ({ type: CHANGE_COLOR, color })

const initialState = { color: 'orange' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { color: action.color }
    default:
      return state
  }
}

export default reducer
