import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './page5/Main'
import Member from './page5/Member'
import MemberDetail from './page5/MemberDetail'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* 상대경로 절대경로 둘 다 쓸 수 있다. */}
          {/* <Route path="/member"/> */}
          <Route path="member">
            {/* index 일치 */}
            <Route index element={<Member />} />
            <Route path=":memberID" element={<MemberDetail />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
/* 
<Route> 에 index  가 안들어가도 됨
*/
