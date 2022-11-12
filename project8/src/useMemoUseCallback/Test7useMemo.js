import React, { useState } from 'react'
import { useMemo } from 'react'
import Test7useCallbackSub from './Test7useMemoSub'

const Test7useCallback = () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
  }
  const testSub = useMemo(() => {
    return <Test7useCallbackSub count={count} />
  }, [count])

  return (
    <>
      <h2>카운트: {count}</h2>
      <button onClick={increment}>증가(+1)</button>
      <hr />
      {testSub}
    </>
  )
}

export default Test7useCallback
/* 

useMemo : return 값을 기억
useCallback : 함수 자체를 기억


'리액트' 는
렌더링이 될 때마다 나의 값을 기억하지 못하고
내부의 것들을 새로 생성한다.




useMemo 는
사용자가 함수를 만들어 사용한다.
★ 꼭 필요한 부분은 context 부분이다.

useMemo ( 콜백함수 , 의존성 )
useMemo ( () => {}, [] )
useMemo ( () => {}, [의존값] )  ★★
의존값이 변경될 떄마다 재계산하고, return 처리된다.




useCallback 는
( 실제 작업의 90% 정도는 사용하는게 좋다. )

useCallback ( 콜백함수 , 의존성 )
useCallback ( () => {}, [] )
useCallback ( () => {}, [의존값] )  ★★
의존값이 변경될 때마다 함수를 생성한다.










*/
