import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GallerySearch from './GallerySearch'
import GalleryList from './GalleryList'

const GalleryBox = styled.div`
  width: ${props => props.width};
  margin: auto;
  padding: 20px;
  h2 {
    text-align: center;
    font-size: 40px;
    letter-spacing: -1px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`

const Gallery = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [text, setText] = useState('flowers')

  useEffect(() => {
    const API_KEY = '31264567-b2f4129d718fb9580a6f88302'
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}s&image_type=photo`
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
    /*
      .catch() {
        setData([])
        setLoading(true);
      setError('주소가 에러')
    }
    */
  }, [])

  return (
    <GalleryBox width="1200px">
      <h2>pixabay - api</h2>
      <GallerySearch />
      <GalleryList data={data} />
    </GalleryBox>
  )
}

export default Gallery
