import React, { createContext, useState } from 'react'

// 데이터 관리자
export const CounterContext = createContext()

const CounterProvider = props => {
  const [count, setCount] = useState(1)
  const onUp = () => {
    setCount(count + 1)
  }
  const onDown = () => {
    setCount(count - 1)
  }
  return (
    <CounterContext.Provider value={{ count, onUp, onDown }}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
