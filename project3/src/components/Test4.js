import React, { useRef } from 'react';
// dom을 연결하거나 숫자를 ★유지할때 사용★한다.
const Test4 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef();
  const ref3 = useRef();
  // const no = useRef(3);

  const onShow = () => {
    // (실제 값에) style 앞에 current가 반드시 들어가야함
    ref1.current.style.background = 'pink';
    ref2.current.style.background = 'skyblue';
    ref3.current.focus();
    //no.current++
  };
  return (
    <div>
      <h2 ref={ref1}>useRef 수업용</h2>
      <h2 ref={ref2}>홍길동</h2>
      <input type="text" ref={ref3} />
      <button onClick={onShow}>확인</button>
    </div>
  );
};

export default Test4;
/* 
useRef

직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능

useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

​

공식문서 내용

useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다

useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

​

​

https://ko.reactjs.org/docs/hooks-reference.html#useref

​

​

​

https://ko.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper

Ref를 사용해야 할 때
Ref의 바람직한 사용 사례는 다음과 같습니다.

포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
선언적으로 해결될 수 있는 문제에서는 ref 사용을 지양하세요.

Ref를 남용하지 마세요
























const 이름 = useRef(null)
const 이름 = useRef(숫자초기값)

★★★값을 유지할때 사용한다.
//많이 쓰이지 않지만 알아두어야한다.

// 선언하는 법
const ref1 = useRef(null)
// 연결하는 법
<태그 ref = { ref1 } >

// 값지정하는 법
ref1.currnet.xxx = 값
ref1.currnet.xxx()

const ref1 = useRef(3)
ref1.currnet++
++ref1.currnet









*/
