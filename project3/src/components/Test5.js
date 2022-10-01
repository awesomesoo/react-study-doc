import React, { useState } from 'react';

const Test5 = () => {
  const [color, setColor] = useState('');

  const changeInput = (e) => {
    const { value } = e.target;
    setColor(value);
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
    </div>
  );
};

export default Test5;
