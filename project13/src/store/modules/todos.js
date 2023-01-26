import { createSlice } from '@reduxjs/toolkit'

let no = 4
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    text: '아무개',
    todos: [
      { id: 1, text: '화요일입니다.', isChk: false },
      { id: 2, text: '드라마 내일.', isChk: true },
      { id: 3, text: '청춘 드라마.', isChk: false },
      { id: 4, text: '새로운 드라마.', isChk: false },
    ],
  },
  reducers: {
    onDel: (state, action) => {
      const id = action.payload
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    onAdd: (state, action) => {
      state.todos = [
        ...state.todos,
        { id: ++no, text: action.payload, isChk: false },
      ]
      // state.todos.push({id: ++no ,  text : action.payload , isChk :false })
    },
    onToggle: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, isChk: !todo.isChk } : todo,
      )
    },
    changeInput: (state, action) => {
      state.text = action.payload
    },
  },
})

export const { onDel, onAdd, onToggle, changeInput } = todoSlice.actions
export default todoSlice.reducer
