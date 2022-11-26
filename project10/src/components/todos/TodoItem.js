import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'

const TodoItem = ({ todo }) => {
  const { id, text, isChk } = todo
  const { onDel } = useContext(TodoContext)
  return (
    <li>
      <input type="checkbox" checked={isChk} />
      {text}
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  )
}

export default TodoItem
