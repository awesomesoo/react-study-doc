import React, { useState } from 'react';

const dataList = [
  { id: 1, text: '하나' },
  { id: 2, text: '둘' },
  { id: 3, text: '셋' },
  { id: 4, text: '넷' },
  { id: 5, text: '다섯' },
];

const Test4 = () => {
  const [data, setData] = useState(dataList); // state가 들어왔는지 개발자모드로 확인하기

  const onDel1 = () => {
    setData(data.filter((item) => item.text !== '하나'));
  };
  const onDel2 = () => {
    setData(data.filter((item) => item.id !== 3));
  };
  // const onDel = (매개변수-위의 객체인 id랑은 다른거지만 동일하게 씀. 아래에 있는 id라는 매개값임  ) => {};
  // const onDel = (id) => {
  const onDel = (idDDD) => {
    setData(data.filter((item) => item.id !== idDDD));
  };

  return (
    <div style={{ marign: 30 }}>
      <h2>추가, 삭제, 수정</h2>
      <p>
        <button>추가</button>
        <button>추가</button>
        <button>추가</button>
      </p>
      <p>
        {/* 1번째 삭제한 나머지 출력 */}
        <button onClick={onDel1}>'하나' 삭제</button>
        <br />
        <button onClick={onDel2}>id:3 삭제</button>
        <br />
        <button onClick={() => onDel(1)}>1 삭제</button>
        <button onClick={() => onDel(4)}>4 삭제</button>
      </p>
      <p>
        <button>수정</button>
        <button>수정</button>
        <button>수정</button>
      </p>

      <hr />

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}/ {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test4;
