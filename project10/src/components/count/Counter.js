import React, { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'

const Counter = () => {
  // const {Provider 의 value }   = useContext(데이터관리자)
  const { count, onUp, onDown } = useContext(CounterContext)
  return (
    <div>
      <h2>카운터 : {count}</h2>
      <button onClick={onUp}>증가</button>
      <button onClick={onDown}>감소</button>
    </div>
  )
}

export default Counter
