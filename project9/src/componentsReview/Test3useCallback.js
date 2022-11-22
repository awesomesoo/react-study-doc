import React, { useState } from 'react'
import { useCallback } from 'react'

const Test3 = () => {
  const [count, setCount] = useState(1)

  const onUp = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const onDown = useCallback(() => {
    setCount(count - 1)
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