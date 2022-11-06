// rsc
import React from 'react';
// import 참조변수 from 'react';
// node_modules 안에 의존성 경로 설정이 없다 (./)
// react 폴더 index.js
// import 참조변수 from './파일명.js, jsx'; js는 생략가능하다.
// 컴포넌트명 test 첫글자 대문자로 사용한다.

const test = () => {
  // 함수영역이다. 모든제어문 사용가능하다.
  return (
    <div>
      <h2>JSX 영역</h2>
      <p>제어문 사용불가</p>
      <p>삼항연산자, &&, map..</p>
      <p></p>
    </div>
  );
};

export default test;
