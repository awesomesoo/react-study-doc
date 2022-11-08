import React from 'react';

const Test6 = () => {
  const arr = ['김철수', '김다희', '이수근', '강호동', '유재석']; //많이 쓰이지 않는다
  const data = [
    //많이 쓰인다
    { id: 1, name: '김태리' },
    { id: 2, name: '김고은' },
    { id: 3, name: '송혜교' },
    { id: 4, name: '전지현' },
    { id: 5, name: '최우식' },
  ];
  return (
    <div>
      <ul>
        {arr.map((item, idx) => {
          return (
            <li key={idx}>
              {idx} / {item}
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 결과가 하나밖에 없을 때는 위의 내용을 바로 아래와 같이 쓰면 된다. */}
      <ul>
        {arr.map((item, idx) => (
          <li key={idx}>
            {idx} / {item}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {data.map((item, idx) => {
          return (
            <li key={idx}>
              {item.id} / {item.name}
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 가급적 index번호로 찾아가지 않아야한다. */}
      <ul>
        {/* 괄호가 없어도 된다. */}
        {/* {data.map(item => ( */}
        {/* {data.map((item) => ( */}
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test6;
/* 
map() : 반복문
jsx에서 화면에 출력을 할 경우 map + key


Key
Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별. 

해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 대부분의 경우 데이터의 ID를 key로 사용합니다.
대부분의 경우 데이터의 ID를 key로 사용합니다.

key 값은 : 중복 x, 고유값
          예시) 주민번호

1. (변화 없이)단순 출력만 할 경우는 index를 사용해도 된다.
2. 보통 고유번호는 id로 처리한다.


index / name
[원본]
0 / 김철수
1 / 김다희
2 / 이수근
3 / 강호동
4 / 유재석


삭제를 하면? index 번호가 바뀌어서 index 번호로 찾아가려고하면 찾아 갈 수 없다.
그래서 가급적 index번호로 찾아가지 않아야한다.
index / name
[삭제]
0 / 김철수
1 / 강호동
2 / 유재석




*/
