import React from 'react'
import { TagListBox } from '../styled/galleryStyle'
// https://react-icons.github.io/react-icons/icons?name=ai
import { AiFillCloseCircle } from 'react-icons/ai'

const TagList = () => {
  return (
    <TagListBox>
      <button>삭제</button>
      <ul>
        <li>
          검색어
          <span>
            <AiFillCloseCircle />
          </span>
        </li>
      </ul>
    </TagListBox>
  )
}

export default TagList
