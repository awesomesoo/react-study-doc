import React, { useMemo } from 'react'

const getColor = color => {
  console.log('getColor')
  switch (color) {
    case 'red':
      return '빨강입니다.'
    case 'green':
      return '녹색입니다.'
    case 'blue':
      return '파랑입니다.'
    default:
      return '색이 없음.'
  }
}

const getFood = food => {
  console.log('getFood')
  switch (food) {
    case '불고기':
      return '불고기 입니다.'
    case '라면':
      return '라면 입니다.'
    case '쫄면':
      return '쫄면 입니다.'
    default:
      return '음식이 없음.'
  }
}
const Test8Sub = ({ color, food }) => {
  const colorInfo = useMemo(() => {
    return getColor(color)
  }, [color])
  const foodInfo = useMemo(() => {
    return getFood(food)
  }, [food])

  return (
    <>
      <h3>좋아하는 색 : {color}</h3>
      <p>색 설명 : {colorInfo}</p>
      <hr />
      <h3>좋아하는 음식 : {food}</h3>
      <p>음식 설명 : {foodInfo}</p>
    </>
  )
}

export default Test8Sub