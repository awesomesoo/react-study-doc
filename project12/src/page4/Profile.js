import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Front from './Front'

const Profile = () => {
  return (
    <div className="page">
      <h1>Profile Page</h1>
      <ul>
        <li>
          {/* 상대경로라 아래와 같이 to="html" 써도 되지만,
          절대경로로 써야 할 경후 to="/profile/html" 이라고 적어야한다
          */}
          <Link to="html">HTML</Link>
        </li>
        <li>
          <Link to="css">CSS</Link>
        </li>
        <li>
          <Link to="react">react</Link>
        </li>
        <li>
          <Link to="vue">vue</Link>
        </li>
        <li>
          <Link to="js">js</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        {/* :name 을 쓰려면 부모도 수정해야한다 */}
        <Route path=":name" element={<Front />} />
      </Routes>
    </div>
  )
}

export default Profile
