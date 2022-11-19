import styled, { css } from 'styled-components'

//Gallery.js
export const GalleryBox = styled.div`
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

//GalleryList.js
export const GalleryListBox = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`

//GalleryItem.js
export const GalleryItemBox = styled.article`
  border: 1px solid #999;
  padding: 15px 15px 30px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 5px #dcdcdc;
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

export const GallerySearchBox = styled.form`
  text-align: center;
  padding: 30px 0;
  input {
    width: 400px;
    height: 50px;
    border: 1px solid #999;
    padding: 0 25px;
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

const post = css`
  width: 500px;
  height: 100px;
  background: pink;
`
const cssBox = (num1, num2 = '3') => css`
  position: absolute;
  width: ${num1 * 3}px;
  height: ${num1 * 4}px;
  border: ${num2}px solid #000;
`

export const Box1 = styled.div`
  ${post}
  ${cssBox(20, 5)}
`

export const TagListBox = styled.div`
  button {
  }
  ul {
    li {
      span {
      }
    }
  }
`
