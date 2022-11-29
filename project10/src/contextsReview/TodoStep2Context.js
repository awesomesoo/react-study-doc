import React, { createContext, useState, useRef, useContext } from 'react'

const TodoUpgradeContext = createContext()
export const useTodos = () => useContext(TodoUpgradeContext)

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: '김태리', isChk: false },
    { id: 2, text: '김고은', isChk: false },
    { id: 3, text: '송중기', isChk: true },
    { id: 4, text: '유재석', isChk: false },
    { id: 5, text: '강호동', isChk: true },
  ])

  const no = useRef(todos.lenghth + 1)

  const [text, setText] = useState('')

  // 삭제
  const onDel = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 체크박스 토글
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id == id ? { ...todo, isChk: !todo.isChk } : todo
      )
    )
  }

  // 추가
  const onAdd = text => {
    setTodos([...todos, { id: no.current++, text, isChk: false }])
    setText('')
  }

  // 글자
  const changeInput = e => {
    const { value } = e.target
    setText(value)
  }

  return (
    <TodoUpgradeContext.Provider
      value={{ todos, onDel, onToggle, onAdd, changeInput, text }}
    >
      {children}
    </TodoUpgradeContext.Provider>
  )
}

export default TodoProvider
