import React, { useReducer } from 'react'

const initialState = { width: 120 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'UP':
      return {
        width: state.width + action.step,
      }
    case 'DOWN':
      return { width: state.width - action.step }
    case 'RESET':
      return { width: action.step }
    default:
      return state
  }
}

const Test10useReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div
        style={{
          width: state.width,
          height: 100,
          background: 'pink',
          transition: '0.5s',
        }}
      ></div>
      <p>
        <button onClick={() => dispatch({ type: 'UP', step: 50 })}>
          증가 : 50
        </button>
        <button onClick={() => dispatch({ type: 'UP', step: 20 })}>
          증가 : 20
        </button>
        <button onClick={() => dispatch({ type: 'DOWN', step: 30 })}>
          감소 : 30
        </button>
        <button onClick={() => dispatch({ type: 'DOWN', step: 10 })}>
          감소 : 10
        </button>
        {/* <button onClick={() => dispatch({ type: 'RESET', step: initialState })}> */}
        <button onClick={() => dispatch({ type: 'RESET', step: 120 })}>
          초기화
        </button>
      </p>
    </div>
  )
}

export default Test10useReducer
