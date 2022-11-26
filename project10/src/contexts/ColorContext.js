import React, { createContext, useState } from 'react'

// 2. 여기에는 모든 상태값, 함수 등을 작성한다.
// 모든 행동 실행문으로 작성한다.

// 관리자 생성
export const ColorContext = createContext() // 디폴트값 없으면 비워놔도된다.

// 공급해주는 역할
const ColorProvider = props => {
  const [color, setColor] = useState('tomato')
  const onRed = () => {
    setColor('red')
  }
  const onGreen = () => {
    setColor('green')
  }
  const onPink = () => {
    setColor('pink')
  }
  const onSkyblue = () => {
    setColor('skyblue')
  }
  return (
    <ColorContext.Provider value={{ color, onRed, onGreen, onPink, onSkyblue }}>
      {/* <Color/> UI 디자인이 이 안에 들어오는 것이다. */}
      {props.children}
    </ColorContext.Provider>
  )
}

export default ColorProvider
