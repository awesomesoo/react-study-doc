import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from './data'

const ProductsDetail = () => {
  const { productID } = useParams()
  const navigate = useNavigate()
  const onGo = () => {
    navigate('/')
  }
  const item = data.find(item => item.id === productID)

  return (
    <div className="item">
      <h2>운동화 상세 페이지</h2>
      <h3>
        {item.name} - 가격:{item.price}
      </h3>
      <p>
        <img src={item.photo} alt={item.name} />
      </p>
      <p>제품설명 : {item.description}</p>
      <button onClick={onGo}>목록</button>
    </div>
  )
}

export default ProductsDetail
