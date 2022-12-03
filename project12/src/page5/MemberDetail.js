import React from 'react'

const MemberDetail = () => {
  const css = {
    margin: 20,
    padding: 15,
    border: '1px solid #999',
  }
  return (
    <div style={css}>
      <h2>MemberDetail</h2>
      <h4>이름 : </h4>
      <h4>이메일 : </h4>
      <h4>연락처 : </h4>
      <h4>웹사이트 : </h4>
    </div>
  )
}

export default MemberDetail
