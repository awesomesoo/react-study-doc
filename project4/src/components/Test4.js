import React from 'react';

const Test4 = () => {
  const onDel1 = () => {};
  const onDel2 = () => {};
  const onDel = () => {};

  return (
    <div style={{ marign: 30 }}>
      <h2>추가, 삭제, 수정</h2>
      <p>
        <button>추가</button>
        <button>추가</button>
        <button>추가</button>
      </p>
      <p>
        <button onClick={onDel1}>삭제1</button>
        <button onClick={onDel2}>삭제2</button>
        <button onClick={onDel}>삭제3</button>
      </p>
      <p>
        <button>수정</button>
        <button>수정</button>
        <button>수정</button>
      </p>
    </div>
  );
};

export default Test4;
