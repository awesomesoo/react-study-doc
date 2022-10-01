import React, { useState } from 'react';

const Test5 = () => {
  const [color, setColor] = useState('');
  const [text, setText] = useState(''); // 1. 임시로 text라는 변수에 담고

  const changeInput = (e) => {
    const { value } = e.target;
    // setColor(value);
    setText(value); // 2. setText를 불러와준다
  };

  const onShow = () => {
    setColor(text);
  };

  return (
    <div>
      <h2 style={{ color: color }}>오늘은 토요일 입니다.</h2>
      <select onChange={changeInput}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
      </select>
      {/* 변경을 눌렀을 때 색 바뀌기 */}
      <button onClick={onShow}>변경</button>
    </div>
  );
};

export default Test5;
