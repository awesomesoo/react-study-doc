import React, { useEffect, useState } from 'react';

const Test5Sub = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    console.log('onMove');
  };

  useEffect(() => {
    // onMove 가 계속 사용(누적)되어 있다.
    window.addEventListener('mousemove', onMove);
    console.log('useEffect');

    // 뒷정리 : onMove를 사용하지 않게하기.
    return () => {
      window.removeEventListener('mousemove', onMove);
      console.log('뒷정리');
    };
  });
  return (
    <div>
      <h2>
        x축 : {x} / y축 : {y}
      </h2>
    </div>
  );
};

export default Test5Sub;
