const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const PINK = 'color/PINK'

export const red = () => ({ type: RED })
export const green = () => ({ type: GREEN })
export const blue = () => ({ type: BLUE })
export const pink = () => ({ type: PINK })

const initialState = { color: 'hotpink' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RED:
      return { color: 'red' }
    case GREEN:
      return { color: 'green' }
    case BLUE:
      return { color: 'blue' }
    case PINK:
      return { color: 'pink' }
    default:
      return state
  }
}

export default reducer
