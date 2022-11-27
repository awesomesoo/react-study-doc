const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'

export const increment = () => ({
  type: INCREMENT,
})
export const decrement = () => ({
  type: DECREMENT,
})
export const reset = () => ({
  type: RESET,
})

const initialState = { num: 0 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { num: state.num + 1 }
    case DECREMENT:
      return { num: state.num - 1 }
    case RESET:
      return { num: 0 }
    default:
      return state
  }
}

export default reducer
