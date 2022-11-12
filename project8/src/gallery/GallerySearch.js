import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const GallerySearchBox = styled.form`
  text-align: center;
  padding: 30px 0;
  input {
    width: 400px;
    height: 50px;
    border: 1px solid #999;
    padding: 15px 0;
    box-sizing: border-box;
  }
  button {
    width: 150px;
    height: 50px;
    background: #000;
    color: #fff;
    vertical-align: top;
  }
`

const GallerySearch = ({ onSearch }) => {
  const [text, setText] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    if (!text) return
    onSearch(text)
  }

  return (
    <GallerySearchBox onSubmit={onSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">검색</button>
    </GallerySearchBox>
  )
}

export default GallerySearch
/* 
 검색한 것에 대해서 필터처리 해보기.
*/
