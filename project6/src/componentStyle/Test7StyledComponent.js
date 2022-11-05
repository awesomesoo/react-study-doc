import React from 'react';
import styled from 'styled-components';

// const 컴포넌트명 = styled.태그``
// const 컴포넌트명 = styled.(태그)``
const Container = styled.div`
  width: 250px;
  height: 50px;
  &:hover {
    background: pink;
    cursor: pointer;
  }
`;

const Test7StyledComponent = () => {
  return <Container>Test7StyledComponent</Container>;
};

export default Test7StyledComponent;
