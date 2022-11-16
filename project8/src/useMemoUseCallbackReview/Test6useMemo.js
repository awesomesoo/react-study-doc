import React, { useMemo, useState } from 'react'

const Test6useMemo = () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  const isEvent = useMemo(() => {
    console.log('isEvent')
    console.log(count)
    return count % 2 === 0
  }, [count])

  return (
    <>
      <h2>카운트: {count}</h2>
      <button onClick={increment}>증가(+1)</button>
      <button onClick={decrement}>감소(-1)</button>
      <hr />
      <h3>{isEvent ? '짝수' : '홀수'}</h3>
    </>
  )
}

export default Test6useMemo