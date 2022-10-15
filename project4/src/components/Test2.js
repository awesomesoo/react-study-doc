import React, { useState } from 'react';

const Test2 = () => {
  const [data, setData] = useState([
    { id: 1, text: '오늘은 토요일입니다. 001' },
    { id: 2, text: '오늘은 토요일입니다. 002' },
    { id: 3, text: '오늘은 토요일입니다. 003' },
    { id: 4, text: '오늘은 토요일입니다. 004' },
    { id: 5, text: '오늘은 토요일입니다. 005' },
  ]);
  return (
    <div style={{ margin: 30 }}>
      <h2> 출력 연습, api</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;
