import React from 'react'
import { useAxios } from '../hooks/useAxios'
import Member from './Member'

const Main = () => {
  const { data } = useAxios('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      <h2>회원수 : {data.length}</h2>
      {data.map(item => (
        <Member item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Main
