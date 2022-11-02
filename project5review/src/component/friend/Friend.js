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
    width: 120px;
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
  const [isChk, setIsChk] = useState(false);

  // 체크박스 클릭시 보이기 / 숨기기 토글
  const changeInput = (e) => {
    const { checked } = e.target;
    setIsChk(checked);
  };

  return (
    <StyledFriend>
      <h1>친구들 총인원 : {data.length}</h1>
      <label className='chk'>
        <input type='checkbox' checked={isChk} onChange={changeInput} />
        {isChk === true ? '보이기' : '숨기기'}
      </label>
      <FriendList data={data} />
      <p className='btn'>
        <button>모두삭제</button>
        <button>초기복구</button>
      </p>
    </StyledFriend>
  );
};

export default Friend;
/* 
컴포넌트를 다 만든다.

사용할 데이터를 불어와준다. 데이터의 총 갯수를 불러온다.
보이기/숨기기 체크 상태를 설정해주고 상태 관리를 한다.

FriendList 에 data 전달.
FriendList 에서 data 를 {data.map(item => <FriendItem key={item.id} />)} 으로 보여주기

*/
