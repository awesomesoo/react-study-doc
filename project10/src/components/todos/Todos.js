import React, { useContext } from 'react'
import { ColorContext } from '../../contexts/ColorContext'
import { CounterContext } from '../../contexts/CounterContext'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
/* 
    ColorContext 도 가져와서 사용할 수 있다.
*/
const Todos = () => {
  const { color } = useContext(ColorContext)
  const { count } = useContext(CounterContext)
  return (
    <div>
      <h1 style={{ color: color }}>할일 만들기 / {count}</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Todos
