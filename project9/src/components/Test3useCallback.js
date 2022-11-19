import React, { useState } from 'react'
import { useCallback } from 'react'

const Test3 = () => {
  const [count, setCount] = useState(1)

  // useCallback 은 작업 시 거의 대부분 붙여서 사용한다. 약 90% 정도.
  const onUp = useCallback(() => {
    setCount(count + 1)
    // setCount(count => count + 1) // 이렇게 쓰는 건 정말 특별한 경우. 위와 같음.
  }, [count])

  const onDown = useCallback(() => {
    setCount(count - 1)
    // setCount(count => count - 1)
  }, [count])

  return (
    <div>
      <h2>useCallback : {count}</h2>
      <button onClick={onUp}>1 증가</button>
      <button onClick={onDown}>1 감소</button>
    </div>
  )
}

export default Test3
/* 
문법 자체를 기억하는 건.........

useCallback.....

본인 외의 자식 함수들까지 재실행 됨.

useCallback 은

★★★★★
useMemo 보다 React.memo 가 매우 중요하다.

useMemo 는
사용자가 함수를 만들어 잘 사용하려고 하는거고 

React.memo 는
리턴이 필요없는 애들한테는 리턴할 필요가 없다.
= 변경된 값이 없으면, 리턴하지 않는다



*/
