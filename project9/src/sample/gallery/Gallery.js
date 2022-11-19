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
  const [isShow, setIsShow] = useState(false)

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
    setIsShow(true)
  }

  const onDel = text => {
    // 삭제
    // setTagdata(tagdata.filter(item => item !== text))
    // if (tagdata.length === 0) {
    if (tagdata.length === 1) {
      setIsShow(false)
    } else {
      setTagdata(tagdata.filter(item => item !== text))
    }
    console.log(tagdata.length)
  }

  const onAllDel = () => {
    // 모두 삭제
    setTagdata([])
    setIsShow(false)
  }

  return (
    <GalleryBox width="1200px">
      <h2>pixabay - api</h2>
      <GallerySearch onSearch={onSearch} />
      {isShow && (
        <TagList tagdata={tagdata} onDel={onDel} onAllDel={onAllDel} />
      )}

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



태그 각각 '삭제' 기능
const onDel = () => {
  // 삭제
  setTagdata(tagdata.filter(item => item !== text))
}
TagList tagdata={tagdata} onDel={onDel}/>

<span onClick={() => onDel(tag)}>
  <AiFillCloseCircle />
</span>



태그 '모두 삭제' 기능
const onAllDel = () => {
  // 모두 삭제
  setTagdata([])
}
onAllDel 객체 전달



이때 '모두 삭제'라는 버튼은 남아 있어서 이것 또한 삭제 처리.

const [isShow, setIsShow] = useState(false)
{isShow && (
  <TagList tagdata={tagdata} onDel={onDel} onAllDel={onAllDel} />
)}

const onSearch = text => {
    setText(text)
    setTagdata([...tagdata, text])
    setIsShow(true)
  }

const onAllDel = () => {
  // 모두 삭제
  setTagdata([])
  setIsShow(false)
}

const onDel = text => {
  // 삭제
  if (tagdata.length === 1) {
    setIsShow(false)
  } else {
    setTagdata(tagdata.filter(item => item !== text))
  }
  console.log(tagdata.length)
}



src > sample > gallery > index.js 생성 후
export { default as Gallery } from './Gallery'

src > sample > index.js 생성 후
export { Gallery } from './gallery'


app.js 에서 
import { Gallery } from './sample'
<Gallery />
로 불어오기

*/
