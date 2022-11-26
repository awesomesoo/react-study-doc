import React, { useContext } from 'react'
import { ColorContext } from '../../contexts/ColorContext'

const Color = () => {
  const { color, onRed, onGreen, onPink, onSkyblue } = useContext(ColorContext)
  return (
    <div>
      <h2 style={{ color: color }}>컬러 : {color}</h2>
      <p>2. UI 디자인 만들기</p>
      <p>
        <button onClick={onRed}>red</button>
        <button onClick={onGreen}>green</button>
        <button onClick={onPink}>pink</button>
        <button onClick={onSkyblue}>skyblue</button>
      </p>
    </div>
  )
}

export default Color
