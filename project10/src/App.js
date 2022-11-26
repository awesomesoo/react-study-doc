import React from 'react'
import Color from './components/color/Color'
import Counter from './components/count/Counter'
import ChangeColor from './components/color/ChangeColor'
import ColorProvider from './contexts/ColorContext'
import CounterProvider from './contexts/CounterContext'

const App = () => {
  return (
    <div style={{ margin: 40 }}>
      <ColorProvider>
        <Color />
      </ColorProvider>
      <hr />
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <hr />
      <ChangeColor />
    </div>
  )
}

export default App
