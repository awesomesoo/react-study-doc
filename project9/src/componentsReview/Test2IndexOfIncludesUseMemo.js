import React, { useMemo, useState } from 'react'
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
  const [text, setText] = useState('')

  const changeInput = e => {
    setText(e.target.value)
  }

  const data = useMemo(() => {
    return dataList.filter(item =>
      item.text.toLowerCase().includes(text.toLowerCase()),
    )
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
