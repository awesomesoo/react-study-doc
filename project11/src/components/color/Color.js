import React from 'react'
import { useSelector } from 'react-redux'

const Color = () => {
  const color = useSelector(state => state.colorA.color) // state 를 쓰면 모든걸 가져온다.
  // useSelector(state => state.colorA.color)
  // colorA 는 초기변수
  return (
    <div>
      <h2 style={{ color: color }}>컬러 : {color}</h2>
      <p>
        <button>red</button>
        <button>green</button>
        <button>blue</button>
        <button>pink</button>
      </p>
    </div>
  )
}

export default Color
