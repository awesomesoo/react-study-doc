import React from 'react'

// import Test1 from './components/Test1'
// import Gallery from './sample/gallery/Gallery'; // index 만들어서 필요 없음
import GlobalStyle from './sample/styled/Global'
// import { Gallery } from './sample'
// import Test2 from './components/Test2IndexOfIncludes'
import Test from './components/Test4ReactMemo'

const App = () => {
  return (
    <>
      {/* <Test1 /> */}
      <GlobalStyle />
      {/* <Gallery /> */}
      <Test />
    </>
  )
}

export default App
