import React, { useState } from 'react';

const Test7 = () => {
  const [name, setName] = useState('이름이없습니다');
  const [age, setAge] = useState(100);
  const [color, setColor] = useState('orange');

  const onName1 = () => {
    setName('김고은');
  };
  const onName2 = () => {
    setName('전지현');
  };
  const onName3 = () => {
    setName('김태리');
  };

  const onAge1 = () => {
    setAge(20);
  };
  const onAge2 = () => {
    setAge(21);
  };
  const onAge3 = () => {
    setAge(22);
  };

  const onColor1 = () => {
    setColor('hotpink');
  };
  const onColor2 = () => {
    setColor('yellow');
  };
  const onColor3 = () => {
    setColor('skyblue');
  };

  return (
    <div>
      <h3 style={{ color: color }}>
        이름 : {name} / 나이: {age}살 / 색 : {color}
      </h3>
      <p>
        <button onClick={onName1}>김고은</button>
        <button onClick={onName2}>전지현</button>
        <button onClick={onName3}>김태리</button>
      </p>
      <p>
        <button onClick={onAge1}>20살</button>
        <button onClick={onAge2}>21살</button>
        <button onClick={onAge3}>22살</button>
      </p>
      <p>
        <button
          onClick={() => {
            setColor('hotpink');
          }}
        >
          hotpink
        </button>
        <button
          onClick={() => {
            setColor('green');
          }}
        >
          green
        </button>
        <button
          onClick={() => {
            setColor('skyblue');
          }}
        >
          skyblue
        </button>
      </p>
    </div>
  );
};

export default Test7;

/* 

https://ko.reactjs.org/docs/hooks-state.html
Using the State Hook

Hooks => useState

렌더링 될떄마다
내부것을 기억하지 못하고 새로 만든다. (매번 초기화 시킨다)

변수, 함수 새로 생성 한다.
use + Xxxxx 를 훅이라고 한다. 예시 ) useXxxxx
useState : 유동적으로 값을 변경할 때

const [ 상태데이터, 상태데이터 값을 변경해주는 함수 ] = useState(초기값) 
const [ 변수, 변수를 변경해주는 함수명 ] = useState(초기값) 
const [ state, setState ] = useState(초기값) 
예시)
const [ A, B ] = useState(0) 
A = 0
B( 100 )    // 이면 A = 100
B( 값 or 수식 )                  =  값도 들어갈 수 있고 수식도 들어갈 수 있다.

const [ 상태변수, set상태변수함수 ] = useState(초기값)
초기값 : 숫자, 논리값, 문자, [] , {} ...

//앞에 이름에 set을 붙여주는게 암묵적으로 사용됨. 연결되어보이니까.
const [ count , setCount ] = useState(0)
count = 0
setCount( 20 )   // 이면 count = 20







*/
