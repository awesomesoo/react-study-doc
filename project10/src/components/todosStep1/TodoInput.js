import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'

const TodoInput = () => {
  const { onAdd, changeInput, text } = useContext(TodoContext)

  const onSubmit = e => {
    e.preventDefault()
    onAdd(text)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} />
      <button type="submit">추가</button>
    </form>
  )
}

export default TodoInput
