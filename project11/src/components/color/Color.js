import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { red, green, pink, blue } from '../../store/modules/color'

const Color = () => {
  const color = useSelector(state => state.colorA.color) // state 를 쓰면 모든걸 가져온다.
  // useSelector(state => state.colorA.color)
  // colorA 는 초기변수

  const dispath = useDispatch()
  return (
    <div>
      <h2 style={{ color: color }}>컬러 : {color}</h2>
      <p>
        <button onClick={() => dispath(red())}>red</button>
        <button onClick={() => dispath(green())}>green</button>
        <button onClick={() => dispath(blue())}>blue</button>
        <button onClick={() => dispath(pink())}>pink</button>
      </p>
    </div>
  )
}

export default Color
