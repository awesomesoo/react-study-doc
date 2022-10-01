import React from 'react';

const Test10Ani = ({ ani, onAni }) => {
  return (
    <>
      <h3>Animal 컴포넌트</h3>
      <p>동물</p>
      <input type="text" value={ani} onChange={onAni} />
      <span>{ani}</span>
    </>
  );
};

export default Test10Ani;
