import React from 'react'
import { Link } from 'react-router-dom'

const Member = ({ item }) => {
  const { name, email, phone, id } = item

  const css = {
    margin: 20,
    padding: 15,
    border: '1px solid #999',
  }
  return (
    <div style={css}>
      <h2>Member</h2>
      <h4>이름 : {name}</h4>
      <h4>이메일 : {email}</h4>
      <h4>연락처 : {phone}</h4>
      <p>
        <Link to={`/member/${id}`}>상세보기+</Link>
      </p>
      <button>자세히보기</button>
    </div>
  )
}

export default Member
