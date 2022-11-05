import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  border: 1px solid #000;
  margin: 10px auto;
`;
const Box1 = styled.section`
  width: 100%;
  height: 50px;
  background: pink;
  transition: 0.4s;
  line-height: 50px;
  text-indent: 10px;
  &:hover {
    text-indent: 100px;
    color: #fff;
  }
`;
const Box2 = styled('article')`
  margin-top: 20px;

  width: 100%;
  height: 50px;
  background: tomato;
  transition: 0.4s;
  line-height: 50px;
  text-indent: 10px;
  &:hover {
    text-indent: 100px;
    color: #fff;
  }
`;

const Test8 = () => {
  return (
    <Container>
      <Box1>연습 1</Box1>
      <Box2>연습 2</Box2>
    </Container>
  );
};

export default Test8;
