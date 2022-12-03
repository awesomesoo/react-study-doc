import React from 'react'
import { useParams } from 'react-router-dom'

const Front = ({ data }) => {
  // 사용자 정의변수 받기
  // const {사용자 정의변수} = useParams()   :  값 받기
  // useParams() 는 리액트라우터돔에서 지원해준다
  // 이 방법은 제일 안좋은 방법이다. 참고만 하자
  const { name } = useParams()

  // const { name } 은 <Route path="/front/:name"/> 과 같은 name이다
  return (
    <div className="page">
      <h1>Front Page</h1>
      {data
        .filter(item => item.title === name)
        .map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h3>{item.info}</h3>
          </div>
        ))}
    </div>
  )
}

export default Front
