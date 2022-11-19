import React from 'react'
import { TagListBox } from '../styled/galleryStyle'

const TagList = () => {
  return (
    <TagListBox>
      <button>삭제</button>
      <ul>
        <li>검색어 <span></span></li>
      </ul>
    </TagListBox>
  )
}

export default TagList
