import React, { useState } from 'react'
import Test5Sub from './Test5Sub'
import Test5Title from './Test5Title'
/*
 * 여러 컴포넌트에서 여러 일을 수행하고 있다. 하나가 바뀌면 전부다 리턴을 하기 때문에 변경된 값만 리턴해주기위해서 사용한다.
 * 리렌더링 방지
 * 프로젝트가 더 커지면 리덕스나 컨텍스트 사용.
 * */
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
      <Test5Sub text="이름 : " result={name} />
      <button onClick={onName}>이름</button>
      <Test5Sub text="나이 : " result={age} />
      <button onClick={onAge}>나이</button>
      <Test5Sub text="용돈 : " result={money} />
      <button onClick={onMoney}>용돈</button>
    </div>
  )
}

export default React.memo(Test5)
