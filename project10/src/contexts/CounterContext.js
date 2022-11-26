import React, { createContext, useState } from 'react'

// 데이터 관리자
export const CounterContext = createContext()

const CounterProvider = props => {
  // 상태변수 선언
  const [count, setCount] = useState(1)
  // 행동의 함수 등 모든 실행문을 작성함
  const onUp = () => {
    setCount(count + 1)
  }
  const onDown = () => {
    setCount(count - 1)
  }
  // Provider는 제공자
  return (
    <CounterContext.Provider value={{ count, onUp, onDown }}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
