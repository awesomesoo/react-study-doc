import React, { useState } from 'react';

const Test9 = () => {
  const [bgcolor, setBgcolor] = useState('pink');
  const onColor = () => {
    // if (bgcolor === 'pink') {
    //   setBgcolor('skyblue');
    // } else {
    //   setBgcolor('pink');
    // }
    setBgcolor(bgcolor === 'pink' ? 'skyblue' : 'pink');
  };

  return (
    <>
      <p>h2의 배경색 변경을 토글처럼 사용. pink 클릭하면 skyblue로 변경</p>
      <h2
        style={{
          width: 400,
          height: 80,
          border: '1px solid #000',
          margin: 20,
          fontSize: 30,
          lineHeight: '80px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: bgcolor,
        }}
        onClick={onColor}
      >
        배경색 : {bgcolor}
      </h2>
    </>
  );
};

export default Test9;
