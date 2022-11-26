import React, { createContext } from 'react'

// 2. 여기에는 모든 상태값, 함수 등을 작성한다.
// 모든 행동 실행문으로 작성한다.

// 관리자 생성
export const ColorContext = createContext() // 디폴트값 없으면 비워놔도된다.

// 공급해주는 역할
const ColorProvider = () => {
  return (
    <ColorContext.Provider value="">
      {/*     
            <Color/> UI 디자인이 이 안에 들어오는 것이다.
        */}
    </ColorContext.Provider>
  )
}

export default ColorProvider
