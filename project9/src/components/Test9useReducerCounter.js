import React, { useReducer } from 'react'

const initialState = { count: 50 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.step }
    // 작업에 내용이 많으면 아래와 같이 ...state를 작성한다.
    // return { ...state, count: state.count + action.step }
    case 'DECREMENT':
      return { count: state.count - action.step }
    // return { ...state, count: state.count - action.step }
    default:
      return state
  }
}

const Test9useReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>숫자 : {state.count} </h2>
      <p>
        <button onClick={() => dispatch({ type: 'INCREMENT', step: 20 })}>
          20씩 증가
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT', step: 50 })}>
          50씩 증가
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', step: 10 })}>
          10씩 감소
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', step: 60 })}>
          60씩 감소
        </button>
      </p>
    </div>
  )
}

export default Test9useReducerCounter

/* 

import React, { useReducer } from 'react'

const initialState = { count: 50 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {}
    case 'DECREMENT':
      return {}
    default:
      return state
  }
}

const Test9useReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>숫자 : {state.count} </h2>
      <p>
        <button onClick={() => dispatch({ type: 'INCREMENT', step: 20 })}>
          20씩 증가
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT', step: 50 })}>
          50씩 증가
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', step: 10 })}>
          10씩 감소
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', step: 60 })}>
          60씩 감소
        </button>
      </p>
    </div>
  )
}

export default Test9useReducerCounter


=========================


위의 작업후 아래 내용 추가


const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.step }
    case 'DECREMENT':
      return { count: state.count - action.step }
    default:
      return state
  }
}








*/
