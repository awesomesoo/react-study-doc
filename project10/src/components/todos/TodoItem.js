import React from 'react'

const TodoItem = ({ todo }) => {
  const { id, text, isChk } = todo
  return (
    <li>
      <input type="checkbox" checked={isChk} />
      {text}
      <button>삭제</button>
    </li>
  )
}

export default TodoItem
