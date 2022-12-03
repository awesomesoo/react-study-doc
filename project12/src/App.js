import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './page2/About'
import Ceo from './page2/Ceo'
import Home from './page2/Home'
import NavBar from './page2/NavBar'
import NotFiles from './page2/NotFiles'
import './page2/reset.css'
import './page2/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
