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
/* 

5. components안에 UI에 액션, state 연결해서 사용하기

* useSelector : 상태값 처리
* useDispatch : 액션처리

    import { useDispatch , useSelector } from 'react-redux'

    //상태값가져오기
    const state담을이름 = useSelector( state => state.리듀서파일키.state명 )

    const dispatch = useDispatch() 
    <button onClick={() => dispatch( 리듀에서내보낸액션명() )}>변경</button>

*/
