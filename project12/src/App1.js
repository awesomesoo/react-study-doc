import React from 'react'
// import { BrowserRouter as BrowserRouter대신바꾸고자하는이름, Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './page1/Main'
import Sub1 from './page1/Sub1'
import Sub2 from './page1/Sub2'
import Sub3 from './page1/Sub3'

const App = () => {
  return (
    <BrowserRouter>
      <>
        {/* Link :  */}
        <ul>
          <li>
            <Link to="/">메인</Link>
          </li>
          <li>
            <Link to="/sub1">Sub1</Link>
          </li>
          <li>
            <Link to="/sub2">Sub2</Link>
          </li>
          <li>
            <Link to="/sub3">Sub3</Link>
          </li>
        </ul>
        {/* 페이지의 공간 */}
        {/* BrowserRouter : 주소만 바꾸고 페이지를 다시 불러오지 않음 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
          <Route path="/sub3" element={<Sub3 />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
