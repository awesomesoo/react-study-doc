import React from 'react';
const Test5Sub = ({ onDel, onAdd }) => {
  return (
    <div>
      <p>
        <button onClick={() => onDel(3)}>id:3 삭제</button>
        <button onClick={() => onAdd('육')}>새 '육' 추가</button>
      </p>
    </div>
  );
};

export default Test5Sub;
