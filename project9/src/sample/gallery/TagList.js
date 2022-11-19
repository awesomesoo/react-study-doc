import React from 'react'
import { TagListBox } from '../styled/galleryStyle'
// https://react-icons.github.io/react-icons/icons?name=ai
import { AiFillCloseCircle } from 'react-icons/ai'

const TagList = ({ tagdata, onDel, onAllDel }) => {
  return (
    <TagListBox>
      <button onClick={onAllDel}>모두 삭제</button>
      <ul>
        {tagdata.map((tag, index) => (
          <li key={index}>
            {tag}
            <span onClick={() => onDel(tag)}>
              {/* <span onClick={() => onDel(tag)}> // 이건 설계를 잘못함 */}
              <AiFillCloseCircle />
            </span>
          </li>
        ))}
      </ul>
    </TagListBox>
  )
}

export default TagList
