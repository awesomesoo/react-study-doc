import React, { useState } from 'react'

// 사용자 정의 훅 = 함수이다.  사용자가 편하기 위해 만든 함수.
// 함수안에 상태값, 함수 등
export const useCounter = (initialState = 100) => {
  const [state, setState] = useState(initialState)
  const onUp = () => {
    setState(state + 1)
  }
  const onDown = () => {
    setState(state - 1)
  }
  const onReset = () => {
    setState(0)
  }
  return { state, onUp, onDown, onReset }
}

export default useCounter
