import React from 'react';
// 주의: { onDel, onAdd, onMod }에 괄호{}가 없으면 매개변수로 인식함
const Test5Sub = ({ onDel, onAdd, onMod }) => {
  return (
    <div>
      <p>
        {/* <button onClick={() => onDel(1)}>id:1 삭제</button> */}
        <button onClick={() => onDel(7)}>id:7 삭제</button>
        <button onClick={() => onAdd('육')}>새 '육' 추가</button>
        <button onClick={() => onMod(4)}> 사 수정</button>
      </p>
    </div>
  );
};

export default Test5Sub;

/* 
주의 :
data.length 로 하면 키가 중복이 된다. 이렇게 쓰면 안됨<div className=""></div>
*/
