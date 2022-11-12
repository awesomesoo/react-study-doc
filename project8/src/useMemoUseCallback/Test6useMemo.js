import React, { useMemo, useState } from 'react'

const Test6useMemo = () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  // useMemo(() => {}, [])
  // 사용자가 함수를 만들어서 return 값을 기억시킨다.
  const isEvent = useMemo(() => {
    // return 이후의 내용을 기억하겠다. 그러므로 useMemo를 위와 같이 사용.
    console.log('isEvent')
    console.log(count)
    return count % 2 === 0
  }, [count])
  // count 가 바뀔때마다 특정 값이 들어가게 한다.

  return (
    <>
      <h2>카운트: {count}</h2>
      <button onClick={increment}>증가(+1)</button>
      <button onClick={decrement}>감소(-1)</button>
      <hr />
      {/* <h3>{isEvent}</h3> */}
      {/* 이렇게 하면 동시실행이 되기 때문에 isEvent 함수를 실행하지 못한다. */}
      <h3>{isEvent ? '짝수' : '홀수'}</h3>
    </>
  )
}

export default Test6useMemo
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
