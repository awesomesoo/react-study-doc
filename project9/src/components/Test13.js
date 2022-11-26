import React from 'react'
import { useState } from 'react'
import useAxios from '../hooks/useAxios'

const Test13 = () => {
  const [text, setText] = useState('posts')
  const { data } = useAxios(`https://jsonplaceholder.typicode.com/${text}`)
  
  const btnList = ['posts', 'albums', 'photos', 'todos']

  //   const onShow = (매개변수) => {
  const onShow = text => {
    setText(text)
  }
  return (
    <div>
      {/* 
      <p>
        <button onClick={() => onShow('posts')}>posts</button>
        <button onClick={() => onShow('albums')}>albums</button>
        <button onClick={() => onShow('photos')}>photos</button>
        <button onClick={() => onShow('todos')}>todos</button>
      </p>
      */}
      <p>
        {btnList.map(item => (
          <button key={item} onClick={() => onShow(item)}>
            {item}
          </button>
        ))}
      </p>

      <hr />
      <h1>{text} List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.id} / {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test13
/* 
타이틀이 있는 것만 출력하기
*/
