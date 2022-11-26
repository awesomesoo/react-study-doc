import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

// props.children를 쓰기 귀찮으니, {children}으로 써도된다.
// 컴포넌트를 디자인에게 전달해주기 위한 것.
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: '김태리', isChk: false },
    { id: 2, text: '김고은', isChk: false },
    { id: 3, text: '송중기', isChk: true },
    { id: 4, text: '유재석', isChk: false },
    { id: 5, text: '강호동', isChk: true },
  ])
  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider
