import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from '../../store/modules/count'

const Count = () => {
  const value = useSelector(state => state.countPage.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>숫자 : {value}</h2>
      <p>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>10증가</button>
        <button onClick={() => dispatch(decrementByAmount(10))}>10감소</button>
      </p>
    </div>
  )
}

export default Count
