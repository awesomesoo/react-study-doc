import React from 'react'
import styled from 'styled-components'

const GalleryItemBox = styled.article`
  border: 1px solid #000;
  padding: 15px 15px 30px;
  margin-bottom: 40px;
  h3 {
    font-size: 30px;
    font-weight: 600;
    color: tomato;
    text-shadow: 2px 2px 2px #dcdcdc;
    text-transform: uppercase;
    margin: 15px 0 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
  }
  ul {
    li {
      line-height: 35px;
      border-bottom: 1px dotted #999;
    }
  }
  p {
    margin-top: 30px;
    span {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 15px;
      background: #333;
      margin-right: 5px;
      color: #fff;
    }
  }
`
const GalleryItem = ({ item }) => {
  const { likes, views, downloads, user, tags, webformatURL } = item
  const tagList = tags.split(',')
  // const tagList = tags.  -> 유사배열처리

  return (
    <GalleryItemBox>
      <img src={webformatURL} alt="" />
      <h3> {user} </h3>
      <ul>
        <li>조회수 : {views} </li>
        <li>다운로드 : {downloads} </li>
        <li>좋아요 : {likes} </li>
      </ul>
      <p>
        {tagList.map(tag => (
          <span key={tag}>#{tag.trim()}</span>
        ))}
      </p>
    </GalleryItemBox>
  )
}

export default GalleryItem
