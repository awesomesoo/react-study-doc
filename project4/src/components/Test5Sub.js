import React from 'react';
// 주의: { onDel, onAdd, onMod }에 괄호{}가 없으면 매개변수로 인식함
const Test5Sub = ({ onDel, onAdd, onMod }) => {
  return (
    <div>
      <p>
        <button>id:1 삭제</button>
        <button>새 '육' 추가</button>
        <button>'사' 수정</button>
      </p>
    </div>
  );
};

export default Test5Sub;
