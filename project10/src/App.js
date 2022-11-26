import React from 'react'
import Color from './components/color/Color'
import Counter from './components/count/Counter'
import ColorProvider from './contexts/ColorContext'

const App = () => {
  return (
    <div style={{ margin: 40 }}>
      <ColorProvider>
        <Color />
      </ColorProvider>
      <hr />
      <Counter />
    </div>
  )
}

export default App
