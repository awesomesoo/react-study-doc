import React from 'react'

// import Test1 from './components/Test1'
// import Gallery from './sample/gallery/Gallery'; // index 만들어서 필요 없음
import GlobalStyle from './sample/styled/Global'
// import { Gallery } from './sample'
// import Test2 from './components/Test2IndexOfIncludes'
// import Test4 from './components/Test4ReactMemo'
// import Test from './components/Test5'
// import Test6useReducer from './components/Test6useReducer'
// import Test7useReducer from './components/Test7useReducer'
import Test8useReducer from './components/Test8useReducer'
import Test9useReducerCounter from './components/Test9useReducerCounter'

const App = () => {
  return (
    <>
      {/* <Test1 /> */}
      <GlobalStyle />
      {/* <Gallery /> */}

      {/* <Test4 />
      <Test /> */}
      {/* <Test6useReducer /> */}
      {/* <Test7useReducer /> */}
      <Test8useReducer />
      <Test9useReducerCounter />
    </>
  )
}

export default App
