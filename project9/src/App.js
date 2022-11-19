import React from 'react'
import Test3 from './components/Test3'
// import Test1 from './components/Test1'
// import Gallery from './sample/gallery/Gallery'; // index 만들어서 필요 없음
import GlobalStyle from './sample/styled/Global'
// import { Gallery } from './sample'
// import Test2 from './components/Test2IndexOfIncludes'

const App = () => {
  return (
    <>
      {/* <Test1 /> */}
      <GlobalStyle />
      {/* <Gallery /> */}
      <Test3 />
    </>
  )
}

export default App
