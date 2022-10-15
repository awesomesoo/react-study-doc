import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const dataList = [
  { id: 1, text: '일 입니다' },
  { id: 2, text: '이 입니다' },
  { id: 3, text: '삼 입니다' },
  { id: 4, text: '사 입니다' },
  { id: 5, text: '오 입니다' },
];

const Test5 = () => {
  const [data, setData] = useState(dataList);
  return (
    <div>
      <h2>삭제, 추가, 수정</h2>
      <Test5Sub />
    </div>
  );
};

export default Test5;
