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

  const onDel = (id) => {
    // alert('id');
    setData(data.filter((item) => item.id !== id));
  };
  const onAdd = (text) => {
    // alert('text');
    setData([...data, { id: data.length + 1, text: '육' }]);
    /* 
      주의 :
      data.length 로 하면 키가 중복이 된다. 이렇게 쓰면 안됨<div className=""></div>
    */
  };
  const onMod = (id) => {
    // alert('id');
    setData(
      data.map((item) =>
        item.id === id ? { ...item, text: 'text변경' } : item
      )
    );
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
