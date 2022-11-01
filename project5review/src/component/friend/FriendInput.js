import React from 'react';
import styled from 'styled-components';

const StyledFrom = styled.from`
  padding: 20px;
  background: beige;
  margin-top: 20px;
  p {
    margin-bottom: 5px;
  }
  p label {
    display: inline-block;
    width: 80px;
  }
  p:nth-child(3) input {
    width: 270px;
  }
  button {
    width: 100%;
    margin-top: 15px;
    height: 50px;
  }
`;

const FriendInput = () => {
  return (
    <StyledFrom>
      <p>
        <label>이름</label>
        <input type='text' name='name' />
      </p>
      <p>
        <label>나이</label>
        <input type='text' name='age' />
      </p>
      <p>
        <label>사진</label>
        <input type='text' name='image' />
      </p>
      <p>
        <button type='submit'>추가</button>
      </p>
    </StyledFrom>
  );
};

export default FriendInput;
