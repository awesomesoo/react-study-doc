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

const Test2 = () => {
  const [data, setData] = useState(dataList)
  const [text, setText] = useState('')

  const changeInput = e => {
    setText(e.target.value)
  }

  useEffect(() => {
    setData(dataList.filter(item => item.text.indexOf(text) !== -1))
  }, [text])

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

export default Test2

/* 

indexOf
includes



useEffect(() => {
  setData(data.filter(item => item.text.indexOf(text) !== -1))
}, [text])
위와 같이 쓰면 데이터를 필터링 하는 것에서 또 찾아주기 때문에 문제가 발생한다
만약에 예시로, 검색어에 'n'을 입력한 후 다른거를 쓰면 안나올것이다



*/
