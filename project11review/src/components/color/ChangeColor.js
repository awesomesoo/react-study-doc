import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changecolor } from '../../store/modules/changecolor'

const ChangeColor = () => {
  const { color } = useSelector(state => state.changecolor)

  const dispatch = useDispatch()

  return (
    <div>
      <h2 style={{ color: color }}>컬러 : {color}</h2>
      <p>
        <button onClick={() => dispatch(changecolor('red'))}>red</button>
        <button onClick={() => dispatch(changecolor('green'))}>green</button>
        <button onClick={() => dispatch(changecolor('blue'))}>blue</button>
        <button onClick={() => dispatch(changecolor('pink'))}>pink</button>
      </p>
    </div>
  )
}

export default ChangeColor
