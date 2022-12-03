import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './page3/Home'
import Ceo from './page3/Ceo'
import About from './page3/About'
import Profile from './page3/Profile'
import Front from './page3/Front'
import NotFiles from './page3/NotFiles'

const data = [
  { title: 'html', info: 'html 에 대한 설명입니다.' },
  { title: 'css', info: 'css 에 대한 설명입니다.' },
  { title: 'react', info: ' 에react 대한 설명입니다.' },
  { title: 'vue', info: ' 에 vue대한 설명입니다.' },
  { title: 'js', info: ' 에 js대한 설명입니다.' },
]

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
          <li>
            <Link to="/front">Front</Link>
          </li>
          <li>
            <Link to="/front/html">HTML</Link>
          </li>
          <li>
            <Link to="/front/css">CSS</Link>
          </li>
          <li>
            <Link to="/front/react">REACT</Link>
          </li>
          <li>
            <Link to="/front/vue">VUE</Link>
          </li>
          <li>
            <Link to="/front/js">JS</Link>
          </li>
        </ul>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          {/* path="/이름/:사용자정의변수" */}
          <Route path="/front/:name" element={<Front data={data} />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App

/* 

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './page3/Home'
import Ceo from './page3/Ceo'
import About from './page3/About'
import Profile from './page3/Profile'
import Front from './page3/Front'
import NotFiles from './page3/NotFiles'

const data = [
  { title: 'html', info: 'html 에 대한 설명입니다.' },
  { title: 'css', info: 'css 에 대한 설명입니다.' },
  { title: 'react', info: ' 에react 대한 설명입니다.' },
  { title: 'vue', info: ' 에 vue대한 설명입니다.' },
  { title: 'js', info: ' 에 js대한 설명입니다.' },
]

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
          <li>
            <Link to="/front">Front</Link>
          </li>
          <li>
            <Link to="/front/html">HTML</Link>
          </li>
          <li>
            <Link to="/front/css">CSS</Link>
          </li>
          <li>
            <Link to="/front/react">REACT</Link>
          </li>
          <li>
            <Link to="/front/vue">VUE</Link>
          </li>
          <li>
            <Link to="/front/js">JS</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
    
          <Route path="/front/:name" element={<Front />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App


*/
