import React from 'react'
import useCounter from '../hooks/useCounter'

export const Test11 = () => {
  //   const { state, onUp, onDown, onReset } = 만든함수명(초기값)
  const { state, onUp, onDown, onReset } = useCounter(10)
  return (
    <div>
      <h2>카운트 : {state}</h2>
      <p>
        <button onClick={() => onUp()}>증가</button>
        <button onClick={() => onDown()}>감소</button>
        <button onClick={() => onReset()}>초기화</button>
        {/* 
아래와 같이 써도 되지만, 나중에 값이 추가 될 것 을 고려해 위에처럼 쓴다.
()=> 를 쓰면 바로 실행이 안되게 된다.
        onUp = () => {}


        <button onClick={onUp}>증가</button>
        <button onClick={onDown}>감소</button>
        <button onClick={onReset}>초기화</button>
        */}
      </p>
    </div>
  )
}

export default Test11
