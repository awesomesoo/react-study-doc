import React from 'react'
import Color from './components/color/Color'
import ColorProvider from './contexts/ColorContext'

const App = () => {
  return (
    <div>
      <ColorProvider>
        <Color />
      </ColorProvider>
    </div>
  )
}

export default App
