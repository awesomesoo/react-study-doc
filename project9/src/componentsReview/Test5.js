import React, { useState } from 'react'
import Test5Sub from './Test5Sub'
import Test5Title from './Test5Title'

const Test5 = () => {
  const [name, setName] = useState('홍길동')
  const [age, setAge] = useState(20)
  const [money, setMoney] = useState(30000)

  const onName = () => {
    let test = '홍길동' + Math.floor(Math.random() * 100)
    setName(test)
  }

  const onAge = () => {
    setAge(age + 1)
  }
  const onMoney = () => {
    setMoney(money + 10000)
  }

  return (
    <div>
      <Test5Title />
      <Test5Sub text='이름 : ' result={name} />
      <button onClick={onName}>이름</button>
      <Test5Sub text='나이 : ' result={age} />
      <button onClick={onAge}>나이</button>
      <Test5Sub text='용돈 : ' result={money} />
      <button onClick={onMoney}>용돈</button>
    </div>
  )
}

export default React.memo(Test5)
