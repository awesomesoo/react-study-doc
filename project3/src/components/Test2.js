import React from 'react';

const Test2 = () => {
  //event , evt , e
  const onShow = (e) => {
    console.log(e.target); // 이벤트에 따라 타겟이 달라진다.
    console.log(e.currentTartget); // 이벤트가 걸려있는 대상.
  };
  return (
    <div>
      <button style={{ margin: 20, fontSize: 25 }} onClick={onShow}>
        <strong>안녕하세요 저는 홍길동 입니다.</strong>
        <br />
        <span>지금은 연습중입니다.</span>
      </button>
    </div>
  );
};

export default Test2;
