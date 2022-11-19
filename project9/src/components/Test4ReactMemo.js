import React, { useState, useCallback } from 'react'
import Test4ReactMemoSub from './Test4ReactMemoSub'
/* 
 React.memo 사용
*/
const Test4ReactMemo = () => {
  const [cnt1, setCnt1] = useState(10)
  const [cnt2, setCnt2] = useState(20)
  const [cnt3, setCnt3] = useState(40)

  const onUp1 = useCallback(() => {
    setCnt1(cnt1 + 1)
  }, [cnt1])

  const onUp2 = useCallback(() => {
    setCnt2(cnt2 + 10)
  }, [cnt2])

  const onUp3 = useCallback(() => {
    setCnt3(cnt3 + 40)
  }, [cnt3])

  return (
    <>
      <h2>React.memo</h2>
      <h2>카운트 1: {cnt1}</h2>
      <Test4ReactMemoSub text="출력 카운트 1" count={cnt1} />
      <button onClick={onUp1}>증가</button>
      <hr />
      <h2>React.memo</h2>
      <h2>카운트 2: {cnt2}</h2>
      <Test4ReactMemoSub text="출력 카운트 2" count={cnt2} />
      <button onClick={onUp2}>증가</button>
      <hr />
      <h2>React.memo</h2>
      <h2>카운트 3: {cnt3}</h2>
      <Test4ReactMemoSub text="출력 카운트 3" count={cnt3} />
      <button onClick={onUp3}>증가</button>
      <hr />
    </>
  )
}

export default Test4ReactMemo
