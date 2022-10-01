import React, { useState } from 'react';
import Test10Ani from './Test10Ani';
import Test10Dis from './Test10Dis';
import Test10Name from './Test10Name';

const Test10 = () => {
  const [text, setText] = useState('이름 입력');
  const [ani, setAni] = useState('동물 입력');

  const onText = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onAni = (e) => {
    const { value } = e.target;
    setAni(value);
  };

  return (
    <>
      <h5>자식 컴포넌트간의 값을 전달할 경우, 부모가 데이터 관리</h5>
      <Test10Name text={text} onText={onText} />
      <Test10Ani ani={ani} onAni={onAni} />
      <hr />
      <Test10Dis text={text} ani={ani} />
    </>
  );
};

export default Test10;
