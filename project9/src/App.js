import React from 'react'
// import Gallery from './sample/gallery/Gallery'; // index 만들어서 필요 없음
import GlobalStyle from './sample/styled/Global'
// import Test1 from './components/Test1';
import { Gallery } from './sample'

const App = () => {
  return (
    <>
      {/* <Test1 /> */}
      <GlobalStyle />
      <Gallery />
    </>
  )
}

export default App
