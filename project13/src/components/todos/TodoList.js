import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h3> 할일 내용 리스트 </h3>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
