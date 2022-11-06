// rsc
// import React from 'react';
// 지워도 됨.
const Test1 = () => {
  //함수영역 - 모든 제어문 가능
  let title = '제목';
  const msg = '설명';
  const css = {
    backgroundColor: 'hotpink',
    fontSize: 25,
    textAlign: 'center',
    width: 300,
    lineHeight: '50px',
    border: '1px solid #000',
  };
  return (
    <>
      <h2>JSX 영역</h2>
      {/* 설명 */}
      <h3 style={css}>{title}</h3>
      <h4
      /*
          여러줄 주석
      */
      // 한줄 주석
      >
        {msg}
      </h4>
      <pre>
        jsx - 삼항연산자, && <br />
        같다 === <br />
        다르다 !== <br />
        class 예약어 : className
      </pre>
    </>
  );
};

export default Test1;
