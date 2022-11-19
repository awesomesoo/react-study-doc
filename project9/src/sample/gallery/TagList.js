import React from 'react'
import { TagListBox } from '../styled/galleryStyle'
// https://react-icons.github.io/react-icons/icons?name=ai
import { AiFillCloseCircle } from 'react-icons/ai'

const TagList = ({ tagdata }) => {
  return (
    <TagListBox>
      <button>모두 삭제</button>
      <ul>
        {tagdata.map((tag, index) => (
          <li key={index}>
            {tag}
            <span>
              <AiFillCloseCircle />
            </span>
          </li>
        ))}
      </ul>
    </TagListBox>
  )
}

export default TagList
