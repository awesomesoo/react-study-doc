import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Member = ({ item }) => {
  const { name, email, phone, id } = item

  const navigate = useNavigate()

  const onGo = () => {
    navigate(`/member/${id}`)
    // navigate(상대경로, 절대경로, 숫자(양수/음수)) - 1 다음페이지, -1 이전페이지
  }

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
      <button onClick={onGo}>자세히보기</button>
    </div>
  )
}

export default Member
