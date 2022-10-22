import React, { useState } from 'react';
import FriendList from './FriendList';
import FriendInput from './FriendInput';
import dataList from './assets/friendData';
import './assets/style.css';

const Friend = () => {
  const [data, setData] = useState(dataList);
  const [isChk, setIsChk] = useState(false);

  // 삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // 모두삭제
  const onRemove = () => {
    setData([]);
  };
  // 초기복구
  const onReset = () => {
    setData(dataList);
  };
  // 체크박스 클릭시 보이기/숨기기 토글
  const changeInput = (e) => {
    const { checked } = e.target;
    setIsChk(checked);
  };

  return (
    <div className="wrap">
      <h1>친구들 총 인원 : {data.length}</h1>
      <p className="chk">
        <input type="checkbox" checked={isChk} onChange={changeInput} /> 보이기
        / 숨기기
      </p>
      <FriendList data={data} onDel={onDel} />
      <p className="btn">
        <button onClick={onRemove}>모두삭제</button>
        <button onClick={onReset}>초기복구</button>
      </p>
      {isChk && <FriendInput />}
      {/* {isChk ? <FriendInput />} : null */}
    </div>
  );
};

export default Friend;
