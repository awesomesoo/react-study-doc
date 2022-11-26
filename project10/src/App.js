import React from 'react'

import Color from './components/color/Color'
import Counter from './components/count/Counter'
// import ChangeColor from './components/color/ChangeColor'
import Todos from './components/todos/Todos'

import ColorProvider from './contexts/ColorContext'
import CounterProvider from './contexts/CounterContext'
// import ChangeColorProvider from './contexts/ChangeColorContext'
import TodoProvider from './contexts/TodoContext'

const App = () => {
  return (
    /*     
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
    */

    /* 
      아래와 같이 바꿔서 쓸수 있다.
      서로 값을 주고 받을 수 있다.
    */
    <div style={{ margin: 40 }}>
      <TodoProvider>
        <ColorProvider>
          <CounterProvider>
            <Todos />
            <Color />
            <Counter />
          </CounterProvider>
        </ColorProvider>
      </TodoProvider>
    </div>
  )
}

export default App
