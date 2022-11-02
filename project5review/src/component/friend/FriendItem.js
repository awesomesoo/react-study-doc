import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  p {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
  p img {
    position: absolute;
    left: -10px;
  }
  div {
    width: 160px;
    margin-left: 40px;
    padding-top: 20px;
  }
  button {
    background: rgb(255, 200, 200);
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
  div strong {
    display: block;
    font-size: 16px;
  }
  div span {
    display: block;
    font-size: 15px;
    margin-top: 10px;
  }
`;

const FriendItem = ({ item }) => {
  const { image, name, age } = item;
  return (
    <StyledItem>
      <p>
        <img src={image} alt={name} />
      </p>
      <div>
        <strong>이름 : {name}</strong>
        <span>나이 : {age}</span>
      </div>
      <button>삭제</button>
    </StyledItem>
  );
};

export default FriendItem;
