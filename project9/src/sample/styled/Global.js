import React from 'react';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size:15px; 
    color:#333; 
    line-height:1.6
  }
  a {
    text-decoration: none;
    color:#333;
  }
`

export default GlobalStyle;