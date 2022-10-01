import React, { useState } from 'react';

const Display = ({ ani }) => {
  return (
    <>
      <h3>Display 컴포넌트</h3>
      <h2>내가 좋아하는 동물은 "{ani}" 입니다.</h2>
    </>
  );
};

const Animal = ({ changeInput, ani }) => {
  return (
    <>
      <h3>Animal 컴포넌트</h3>
      <p>
        <label>동물: </label>
        <input type="text" value={ani} onChange={changeInput} />
        <span style={{ marginLeft: 15, color: 'hotpink' }}>{ani}</span>
      </p>
    </>
  );
};

const Name = () => {
  const [text, setText] = useState('');

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <>
      <h3>Name 컴포넌트</h3>
      <p>
        <label>이름: </label>
        <input type="text" value={text} onChange={changeInput} />{' '}
        <span style={{ marginLeft: 15, color: 'hotpink' }}>{text}</span>
      </p>
    </>
  );
};

const Test9 = () => {
  const [ani, setAni] = useState('고양이');

  const changeInput = (e) => {
    const { value } = e.target;
    setAni(value);
  };

  return (
    <div style={{ margin: 30 }}>
      <Name />
      <Animal changeInput={changeInput} ani={ani} />
      <Display ani={ani} />
    </div>
  );
};

export default Test9;
/* 
인풋에 글씨를 입력 -> 상태값이 필요
인풋에 글씨가 바뀜 -> 이것을 저장할 변수를 만들어줌
변수를 
*/
/* 
ani 값이 display에 전달되어야하니까


*/
