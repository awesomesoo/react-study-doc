import React, { useState } from 'react';
import Test8Modal from './Test8Modal';
import './Test8.css';

const Test8 = () => {
  const [isopen, setIsopen] = useState(false);
  const show = () => {
    setIsopen(true);
  };
  const hide = () => {
    setIsopen(false);
  };
  return (
    <>
      <button onClick={show}>팝업열기</button>
      {isopen && <Test8Modal hide={hide} />}
      {/* hide라는 함수를 자식컴포넌트인 Test8Modal 한테 전달해서 사용한다. 
        닫기버튼은 Test8Modal에 있으니까.
      */}
    </>
  );
};

export default Test8;
