import React, { useState } from 'react';
import FriendList from './FriendList';
import FriendInput from './FriendInput';
import dataList from './assets/friendData';
import './assets/style.css';

const Friend = () => {
  const [data, setData] = useState(dataList);
  return (
    <div className="wrap">
      <h1>친구들 총 인원</h1>
      <p className="chk">
        <input type="checkbox" name="" /> 보이기 / 숨기기
      </p>
      <FriendList />
      <p className="btn">
        <button>모두삭제</button>
        <button>초기복구</button>
      </p>
      <FriendInput />
    </div>
  );
};

export default Friend;
