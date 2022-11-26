import { useTodos } from '../../contexts/TodoStep2Context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useTodos()
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
