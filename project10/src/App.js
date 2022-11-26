import React from 'react'

import Color from './components/color/Color'
import Counter from './components/count/Counter'
import ChangeColor from './components/color/ChangeColor'
import Todos from './components/todos/Todos'

import ColorProvider from './contexts/ColorContext'
import CounterProvider from './contexts/CounterContext'
import ChangeColorProvider from './contexts/ChangeColorContext'
import TodoProvider from './contexts/TodoContext'

const App = () => {
  return (
    <div style={{ margin: 40 }}>
      <TodoProvider>
        <Todos />
      </TodoProvider>

      <hr />
      <ColorProvider>
        <Color />
      </ColorProvider>
      <hr />
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <hr />
      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
    </div>
  )
}

export default App
