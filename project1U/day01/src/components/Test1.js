import React from 'react';

const Test1 = () => {
  /* 함수 영역 주석 */
  // 한 줄 주석
  return (
    <>
      <h2>JSX 영역</h2>
      <p>
        최상단은 div, section, ul, li, dl, article... 등 한 줄 이상일 경우
        반드시 div로 묶어야한다.
      </p>
      <p>Fragement: 단순히 묶어준다.</p>
      <p>빈영역의 태그</p>
      {/* <img /> */}
      {/* <br /> */}
      {/* <hr /> */}
      {/* <hr /> */}
      {/* <input type="text" /> */}
      <p>단독태그(빈태그)는 슬래쉬한번</p>
      {/* 리액트 주석 */}
      <p
      // 한 줄 주석
      /*
        
        여러줄 주석 
        
      */
      ></p>
    </>
  );
};

export default Test1;
