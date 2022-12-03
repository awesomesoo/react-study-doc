import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './page4/Home'
import Ceo from './page4/Ceo'
import About from './page4/About'
import Profile from './page4/Profile'
import NotFiles from './page4/NotFiles'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ceo">Ceo</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/about" element={<About />} />
          {/* 아래의 방법도 그렇게 좋은 방법은 아니다 */}
          <Route path="/profile" element={<Profile />}>
            {/* path="/profile/:name" /> */}
            <Route path=":name" />
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
