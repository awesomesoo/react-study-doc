import React, { useContext } from 'react'
import { ColorContext } from '../../contexts/ColorContext'

const Color = () => {
  const { color, onRed, onGreen, onPink, onSkyblue } = useContext(ColorContext)
  return (
    <div>
      <h2>컬러 : </h2>
      <p>2. UI 디자인 만들기</p>
      <p>
        <button>red</button>
        <button>green</button>
        <button>pink</button>
        <button>skyblue</button>
      </p>
    </div>
  )
}

export default Color
