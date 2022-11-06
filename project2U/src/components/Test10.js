import React, { useState } from 'react';

const Test10 = () => {
  const [isShow, setIsshow] = useState(false);

  const css = {
    width: 300,
    height: 80,
    backgroundColor: 'tomato',
    margin: 20,
  };

  const onShow = () => {
    setIsshow(true);
  };
  const onHide = () => {
    setIsshow(false);
  };
  const onToggle = () => {
    //! not !true - false / !false - true
    setIsshow(!isShow);
  };

  return (
    <>
      <p>
        <button onClick={onShow}>보이기</button>
        <button onClick={onHide}>숨기기</button>
        {/* 보이기/숨기기 */}
        <button onClick={onToggle}>{isShow ? '숨기기' : '보이기'}</button>
      </p>
      {/* <div style={css}></div> */}
      {/* JSX 에서는 삼항연산자 아니면 화살표함수 밖에 못쓴다 */}
      <hr />
      {isShow === true ? <div style={css}></div> : null}
      {/* 위의 내용과 아래 값은 같다 */}
      <hr />
      {isShow && <div style={css}></div>}
    </>
  );
};

export default Test10;
