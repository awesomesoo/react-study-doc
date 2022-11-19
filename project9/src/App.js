import React from 'react'

// import Test1 from './components/Test1'
// import Gallery from './sample/gallery/Gallery'; // index 만들어서 필요 없음
import GlobalStyle from './sample/styled/Global'
// import { Gallery } from './sample'
// import Test2 from './components/Test2IndexOfIncludes'
// import Test4 from './components/Test4ReactMemo'
// import Test from './components/Test5'
// import Test6useReducer from './components/Test6useReducer'
import Test7useReducer from './components/Test7useReducer'

const App = () => {
  return (
    <>
      {/* <Test1 /> */}
      <GlobalStyle />
      {/* <Gallery /> */}

      {/* <Test4 />
      <Test /> */}
      {/* <Test6useReducer /> */}
      <Test7useReducer />
    </>
  )
}

export default App
