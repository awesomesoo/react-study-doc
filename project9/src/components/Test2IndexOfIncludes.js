import React, { useState } from 'react'
import { useEffect } from 'react'

const dataList = [
  { id: 1, text: 'naver' },
  { id: 2, text: 'NaVer' },
  { id: 3, text: 'Daum' },
  { id: 4, text: 'google' },
  { id: 5, text: 'GOOGLE' },
  { id: 6, text: '안녕 홍길동' },
  { id: 7, text: '주말 강호동' },
  { id: 8, text: '유재석 진행' },
  { id: 9, text: 'Nate' },
  { id: 10, text: 'Dog Cat' },
  { id: 11, text: '유감가 홍이슬' },
]

const Test2IndexOfIncludes = () => {
  const [data, setData] = useState(dataList)
  const [text, setText] = useState('')

  const changeInput = e => {
    setText(e.target.value)
  }

  // useEffect(() => {
  //   setData(
  //     dataList.filter(
  //       item => item.text.toLowerCase().indexOf(text.toLowerCase()) !== -1,
  //     ),
  //   )
  // }, [text])

  /*
   *  하지만 위의 처럼 indexOf 사용하기보다 includes 를 추천.
   */
  useEffect(() => {
    setData(
      dataList.filter(item =>
        item.text.toLowerCase().includes(text.toLowerCase()),
      ),
    )
  }, [text])

  // 초성문제는 프론트촉이 아니라 SQL 작업하는 분이 작업해야함.

  return (
    <>
      <div>
        <input type="text" value={text} onChange={changeInput} />
        <button>검색</button>
      </div>
      <hr />
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Test2IndexOfIncludes

/* 

indexOf
includes

위의 두개의 차이점?

indexOf는 해당 index 자체를 찾아 splice를 이용한 제거에 유리하나
includes는 return으로 T/F 처리에 유리


문자열.indexOf('문자')
indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.

배열.indexOf('문자 or 문자열')
지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.


배열.includes('문자 or 문자열')
includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다. ( T / F )




===============================




useEffect(() => {
  setData(data.filter(item => item.text.indexOf(text) !== -1))
}, [text])

위와 같이 쓰면 데이터를 필터링 하는 것에서 또 찾아주기 때문에 문제가 발생한다
만약에 예시로, 검색어에 'n'을 입력한 후 다른거를 쓰면 안나올것이다
그러므로 data 가 아닌 아래와 같이 dataList로 써야한다
useEffect(() => {
  setData(dataList.filter(item => item.text.indexOf(text) !== -1))
}, [text])



toLowerCase()를 사용하여 대문자도 검색하기

useEffect(() => {
  setData(
    dataList.filter(
      item => item.text.toLowerCase().indexOf(text.toLowerCase()) !== -1,
    ),
  )
}, [text])




하지만 위의 처럼 indexOf 보다 includes 를 추천!!

  useEffect(() => {
    setData(
      dataList.filter(item =>
        item.text.toLowerCase().includes(text.toLowerCase()),
      ),
    )
  }, [text])






*/
