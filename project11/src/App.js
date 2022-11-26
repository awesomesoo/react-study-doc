import React from 'react'
import Color from './components/color/Color'
import Count from './components/counter/Count'
import ChangeColor from './components/color/ChangeColor'

const App = () => {
  return (
    <div>
      <Color />
      <hr />
      <Count />
      <hr />
      <ChangeColor />
      <hr />
    </div>
  )
}

export default App
