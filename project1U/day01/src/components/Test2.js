import React from 'react';

const Test2 = () => {
  //원래 이렇게(let 처럼) 쓰면 안되지만
  let name = '김태희';
  let age = 20;
  let addr = '제주';
  const tel = '010-1234-5678';

  const css1 = {
    'font-size': '25px',
    'background-color': 'pink',
    width: '300px',
    'line-height': '50px',
    'text-align': 'center',
  };

  const css2 = {
    fontSize: 16,
    backgroundColor: 'green',
    width: 400,
    lineHeight: '40px',
    textAlign: 'center',
    textIndent: 20,
  };

  return (
    <>
      <h2 style={css1}>신상명세서</h2>
      {/* JSX 영역에서는 자바스크립트 값, 수식 {} */}
      <ul>
        <li style={css2}>이름 : {name}</li>
        <li
          style={{
            backgroundColor: 'blue',
            margin: 10,
            padding: 10,
            color: '#fff',
          }}
        >
          나이 : {age}
        </li>
        <li>주소 : {addr}</li>
        <li>전화 : {tel}</li>
      </ul>
    </>
  );
};

export default Test2;
