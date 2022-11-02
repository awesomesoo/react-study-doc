import React, { useState } from 'react';
import FriendList from './FriendList';
import styled from 'styled-components';
import dataList from '../../api/friendData';

const StyledFriend = styled.div`
  width: 400px;
  margin: 20px auto;
  border: 1px solid #999;
  padding: 25px;
  position: relative;

  h1 {
    font-size: 25px;
    margin-bottom: 15px;
  }
  .chk {
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 20px;
    display: block;
    background: #333;
    color: #fff;
    width: 100px;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
  }
  .wrap .btn {
    text-align: center;
  }
  .wrap .btn button {
    padding: 15px 45px;
    border: none;
    background: #b2ebf2;
    outline: none;
    margin-right: 10px;
    cursor: pointer;
  }
  .wrap .btn button:last-child {
    margin-right: 0;
  }
`;

const Friend = () => {
  const [data, setData] = useState(dataList);

  return (
    <StyledFriend>
      <h1>친구들 총인원 : {data.length}</h1>
      <p className='chk'>
        <input type='checkbox' checked />
        보이기/숨기기
      </p>
      <FriendList />
      <p className='btn'>
        <button>모두삭제</button>
        <button>초기복구</button>
      </p>
    </StyledFriend>
  );
};

export default Friend;
