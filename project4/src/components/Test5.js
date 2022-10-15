import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const dataList = [
  { id: 1, text: '일' },
  { id: 2, text: '이' },
  { id: 3, text: '삼' },
  { id: 4, text: '사' },
  { id: 5, text: '오' },
];

const Test5 = () => {
  const [data, setData] = useState(dataList);

  const onDel = () => {
    alert('삭제');
  };
  const onAdd = () => {
    alert('추가');
  };
  const onMod = () => {
    alert('수정');
  };

  return (
    <div>
      <h2>삭제, 추가, 수정</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
      <Test5Sub onDel={onDel} onAdd={onAdd} onMod={onMod} />
    </div>
  );
};

export default Test5;
