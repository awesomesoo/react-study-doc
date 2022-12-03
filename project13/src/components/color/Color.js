import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { red, green, blue, pink } from '../../store/modules/color'

const Color = () => {
  const color = useSelector(state => state.colorPage.color)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 style={{ color: color }}>color: {color}</h2>
      <p>
        <button onClick={() => dispatch(red())}>red</button>
        <button onClick={() => dispatch(green())}>green</button>
        <button onClick={() => dispatch(blue())}>blue</button>
        <button onClick={() => dispatch(pink())}>pink</button>
      </p>
    </div>
  )
}

export default Color
