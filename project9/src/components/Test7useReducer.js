import React, { useReducer } from 'react'

const initialstate = 0
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    default:
      return state
  }
}

const Test7useReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <h2>카운트 : {count} </h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        증가 : INCREMENT
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        감소 : DECREMENT
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        초기값 : RESET
      </button>
    </div>
  )
}

export default Test7useReducer
