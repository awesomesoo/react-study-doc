import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.width};
  margin: 10px auto;
  border: 1px solid #000;
  text-align: center;
  padding: 20px;
  h2 {
    font-size: 40px;
  }
`;
const Button = styled.button`
  padding: 10px 25px 15px;
  font-size: 40px;
  margin-right: 15px;
  &.up::affter {
    content: '🔼';
  }
  &.up::affter {
    content: '🔽';
  }
  &:disabled {
    filter: grayscale(100%);
    background-color: #333;
    cursor: not-allowed;
  }
`;

const Test10StyledComponent = () => {
  const [count, setCount] = useState(5);
  const [max] = useState(10);
  const [min] = useState(0);

  const increment = () => {
    // setCount(count < max ? count + 1 : max);
    setCount(count > max ? max : count + 1);
  };
  const decrement = () => {
    // setCount(count < min ? count - 1 : min);
    setCount(count < min ? min : count - 1);
  };
  return (
    <Container width="400px">
      <h2>카운트(0~10) : {count}</h2>
      <Button className="up" onClick={increment} disabled={count === max}>
        🔼
      </Button>
      <Button className="down" onClick={decrement} disabled={count === min}>
        🔽
      </Button>
    </Container>
  );
};

export default Test10StyledComponent;
