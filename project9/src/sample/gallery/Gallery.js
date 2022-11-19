import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GallerySearch from './GallerySearch'
import GalleryList from './GalleryList'
import { GalleryBox } from '../styled/galleryStyle'
import TagList from './TagList'

const Gallery = () => {
  const [data, setData] = useState([])
  const [tagdata, setTagdata] = useState([]) // 검색어를 관리할 상태
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [text, setText] = useState('flowers')

  useEffect(() => {
    const API_KEY = '31264567-b2f4129d718fb9580a6f88302'
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
    axios
      .get(url)
      .then(res => {
        setData(res.data.hits)
        setLoading(false)
        setError(null)
      })
      .catch(error => {
        setData([])
        setLoading(true)
        setError('주소가 에러')
      })
  }, [text])

  const onSearch = text => {
    setText(text)
    setTagdata([...tagdata, text])
  }

  return (
    <GalleryBox width="1200px">
      <h2>pixabay - api</h2>
      <GallerySearch onSearch={onSearch} />
      <TagList tagdata={tagdata} />
      <GalleryList data={data} />
    </GalleryBox>
  )
}

export default Gallery
/* 
API_KEY 에 pixabay 키 값 넣기


react-icons 설치
TagList에서 아이콘 불러와서 사용



Gallery에 TagList 불러오기
TagListBox 스타일링



const [tagdata, setTagdata] = useState([]) // 검색어를 관리할 상태
setTagdata([...tagdata, text])
<TagList tagdata={tagdata} />

TagList.js 파일에서 
tagdata를 객체로 가져오고
검색어를 입력하면 태그가 들어 올 수 있도록 처리
{tagdata.map((tag, index) => (
  <li key={index}>
    {tag}
    <span>
      <AiFillCloseCircle />
    </span>
  </li>
))}



















*/
