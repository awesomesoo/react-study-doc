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
