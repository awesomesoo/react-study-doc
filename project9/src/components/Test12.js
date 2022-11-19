import React from 'react'
import useAxios from '../hooks/useAxios'

const Test12 = () => {
  const { data, loading, error } = useAxios(
    'https://jsonplaceholder.typicode.com/posts',
  )
  return (
    <>
      {loading && <h1>loading...</h1>}
      <ul>
        {data &&
          !loading &&
          data.map(item => (
            <li key={item.id}>
              {item.id} / {item.title}
            </li>
          ))}
      </ul>
      {/* 주소가 잘못되면 메시지 노출 */}
      <h3>{error ? error : null}</h3>
    </>
  )
}

export default Test12

/* 
 패치보다 엑시오스를 추천한다.
 패치는 어싱크 어웨잇으로 강제로 에러를 만들어 오류를 찾아가야한다.
*/
