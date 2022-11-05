import React from 'react';
// import styled from 'styled-components';
import styled, { css } from 'styled-components'; // css를 가져와서 쓰기
/*
 * 속성: ${(props) => props.속성}
 */
const Container = styled.div`
  /* width: 350px; */
  width: ${(props) => props.ww};
  /* background: hotpink; */
  background: ${(props) => (props.bg ? props.bg : 'yellow')};
  padding: 20px;
  border: 1px solid #000;
  margin: auto;
`;
const Box = styled.button`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: 50px;
  background: ${(props) => props.bgColor};
  border: none;

  /* 
  * 얘한테만 값을 다시 주겠다. CSS를 다시 설정할 수 있다.
  */
  ${(props) =>
    props.primary &&
    css`
      display: block;
      width: 100%;
      background: #000;
      color: #fff;
      transition: 0.4s;
      &:hover {
        width: 80%;
        background: skyblue;
      }
    `}
`;

const Test9StyledComponent = () => {
  return (
    <Container bg="hotpink" ww="350px">
      <Box width="100px" bgColor="tomato">
        버튼 1
      </Box>
      <Box width="110px" bgColor="yellow">
        버튼 2
      </Box>
      <Box width="120px" bgColor="lime">
        버튼 3
      </Box>
      <Box width="130px">버튼 4</Box>
      <Box bgColor="skyblue">버튼 5</Box>
    </Container>
  );
};

export default Test9StyledComponent;
/* 
styled-components 나 이모션은
css를 props 처럼 사용 가능하다
*/
