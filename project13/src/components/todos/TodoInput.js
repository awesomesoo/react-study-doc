import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInput, onAdd } from '../../store/modules/todos'

const TodoInput = () => {
  const { text } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    if (!text) return
    dispatch(onAdd(text))
    dispatch(changeInput(''))
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할일을 입력하세요"
        value={text}
        onChange={e => dispatch(changeInput(e.target.value))}
      />
      <button type="submit">추가</button>
    </form>
  )
}

export default TodoInput
