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

  // 삭제
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

  // 추가
  const onAdd12 = () => {
    setData([{ id: data.length + 1, text: '유재석' }]); // 유재석만이라는 객체만 추가된다.
  };
  const onAdd1 = () => {
    setData([...data, { id: data.length + 1, text: '유재석' }]);
    // 스프레드연산자를 사용해서 기존에 있는 내용에 추가하는 법.  유재석만 추가된다.
  };
  const onAdd2 = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        text: '강호동',
      },
    ]);
  };
  // key와 매개변수의 값이 동일하면 생략가능하다
  const onAdd = (text) => {
    // setData([...data, { id: data.length + 1, text: name }]);
    setData([...data, { id: data.length + 1, text }]);
  };

  // 수정
  const onMod1 = () => {};
  const onMod2 = () => {};
  const onMod = () => {};

  return (
    <div style={{ marign: 30 }}>
      <h2>삭제, 추가, 수정</h2>
      <h3>삭제</h3>
      <p>
        <button onClick={onDel1}>'하나' 삭제한 나머지 출력 </button>
        <br />
        <button onClick={onDel2}>id:3 삭제</button>
        <br />
        <button onClick={() => onDel(1)}>1 삭제</button>
        <br />
        <button onClick={() => onDel(4)}>4 삭제</button>
      </p>
      <h3>추가</h3>
      <p>
        <button onClick={onAdd12}>유재석만 추가</button>
        <br />
        <button onClick={onAdd1}>기존내용+유재석 추가</button>
        <br />
        <button onClick={onAdd2}>강호동 추가</button>
        <br />
        <button
          onClick={() => {
            onAdd('김혜수');
          }}
        >
          기존내용+김혜수 추가
        </button>
        <br />
        <button
          onClick={() => {
            onAdd('한지민');
          }}
        >
          기존내용+한지민 추가
        </button>
      </p>
      <h3>수정</h3>
      <p>
        <button onClick={onMod1}>수정</button>
        <button onClick={onMod2}>수정</button>
        <button onClick={() => onMod(1)}>수정</button>
      </p>

      <hr />

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test4;
