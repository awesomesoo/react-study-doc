import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

const MemberDetail = () => {
  // 누른 id 값을 useParams으로 받아서
  const { memberID } = useParams()
  // Main 에서 사용했던 데이터를 다시 불러온다.
  const { data } = useAxios(
    `https://jsonplaceholder.typicode.com/users/${memberID}`,
  )

  const { username, email, phone, website } = data

  const css = {
    margin: 20,
    padding: 15,
    border: '1px solid #999',
  }

  return (
    <div style={css}>
      <h2>MemberDetail Page : {memberID}</h2>
      <h4>이름 : {username}</h4>
      <h4>이메일 : {email}</h4>
      <h4>연락처 : {phone}</h4>
      <h4>웹사이트 : {website}</h4>
      <button>목록</button>
    </div>
  )
}

export default MemberDetail
