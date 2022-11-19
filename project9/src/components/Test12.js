import React from 'react'
import useAxios from '../hooks/useAxios'

const Test12 = () => {
  const { data } = useAxios('https://jsonplaceholder.typicode.com/posts')
  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.id} / {item.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Test12
