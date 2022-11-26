import React, { createContext } from 'react'

// 데이터 관리자
export const CounterContext = createContext()

const CounterProvider = props => {
  return (
    <CounterContext.Provider value="">{props.children}</CounterContext.Provider>
  )
}

export default CounterProvider
