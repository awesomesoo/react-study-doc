import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { red, green } from '../../store/modules/color'

const Color = () => {
  const color = useSelector(state => state.colorPage.color)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 style={{ color: color }}>color: {color}</h2>
      <p>
        <button onClick={() => dispatch(red())}>red</button>
        <button onClick={() => dispatch(green())}>green</button>
        <button>blue</button>
        <button>pink</button>
      </p>
    </div>
  )
}

export default Color
