import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="navbar">
      <p className="all-menu" onClick={onToggle}>
        menu
      </p>
      {/* <nav className="nav"> */}
      {/* 클래스가 하나밖에 없으면 아래와 같이 쓰지만 
      두개 이상이기에 템플릿 리터럴을 사용해준다. */}
      {/* <nav className={isOpen ? 'on' : ''}> */}
      <nav className={`nav ${isOpen ? 'on' : ''} `}>
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
        </ul>
        <p className="close" onClick={() => setIsOpen(false)}>
          X
        </p>
      </nav>
    </div>
  )
}

export default NavBar
