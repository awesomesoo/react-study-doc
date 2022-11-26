import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../store/modules/count'

const Count = () => {
  //   const num = useSelector(state => state.count.num)
  // 위의 주석과 아래의 내용은 같다. 단지 num 객체를 앞에다가 적은거다
  const { num } = useSelector(state => state.count)

  const dispath = useDispatch()

  return (
    <div>
      <h2>숫자 : {num}</h2>
      <p>
        <button onClick={() => dispath(increment())}>증가</button>
        <button onClick={() => dispath(decrement())}>감소</button>
        <button onClick={() => dispath(reset())}>초기화</button>
      </p>
    </div>
  )
}

export default Count
