import React, { useContext } from 'react'
import { ChangeColorContext } from '../../contexts/ChangeColorContext'
/* 만약 이런게 여러개 있다고 하면 어떻게 처리할 것인가? */
const ChangeColor = () => {
  const { color, changeColor } = useContext(ChangeColorContext)

  return (
    <div>
      <h2>ChangeColor : {color}</h2>
      <p>
        <button onClick={() => changeColor('red')}>red</button>
        <button onClick={() => changeColor('green')}>green</button>
        <button onClick={() => changeColor('pink')}>pink</button>
      </p>
    </div>
  )
}

export default ChangeColor
/* 
const { color, changeColor } = useContext(ChangeColorContext) 
이렇게 계속 관리자를 불러야야하는게 단점
*/
