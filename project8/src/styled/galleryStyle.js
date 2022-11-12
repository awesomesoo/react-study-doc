import styled, { css } from 'styled-components'

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

export const GalleryListBox = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
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

export const GalleryItemBox = styled.article`
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
export const GallerySearchBox = styled.form`
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
