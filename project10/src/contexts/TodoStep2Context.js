import React, { createContext, useState, useRef, useContext } from 'react'
/* 
  TodoUpgradeContext를 계속 불러오는게 불편하니까 간략하게 바꾸기
*/
const TodoUpgradeContext = createContext()
export const useTodos = () => useContext(TodoUpgradeContext)

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

  const no = useRef(todos.lenghth + 1)

  const [text, setText] = useState('')

  // 삭제
  const onDel = id => {
    // alert('삭제')
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 체크박스 토글
  const onToggle = id => {
    // alert('체크박스 토글')
    setTodos(
      todos.map(todo =>
        todo.id == id ? { ...todo, isChk: !todo.isChk } : todo,
      ),
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
/* 
    다이렉트로 TodoList에서 사용할 수 있다.

    꼭 value의 객체로 넘겨줘야한다.
*/
