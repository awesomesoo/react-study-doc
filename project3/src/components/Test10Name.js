import React from 'react';

const Test10Name = ({ text, onText }) => {
  return (
    <>
      <h3>Name 컴포넌트</h3>
      <p>이름</p>
      <input type="text" value={text} onChange={onText} />
      <span>{text}</span>
    </>
  );
};

export default Test10Name;
