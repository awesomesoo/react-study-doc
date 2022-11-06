import React from 'react';

const Test5 = () => {
  // 함수 호출

  const handleClick1 = () => {
    alert('handleClick1-test1');
  };
  const handleClick2 = () => {
    alert('test2');
  };
  const handleClick3 = () => {
    alert('test3');
  };

  return (
    <div>
      <h2>이벤트 on+이벤트 / onClick </h2>
      <p>
        <button onClick={handleClick1}>확인 1번</button>
        <button onClick={handleClick2}>확인</button>
        <button onClick={handleClick3}>확인</button>
      </p>
      <p>
        {/* 내용이 많지 않을 떄 쓰는 법 아래 두 가지*/}
        {/* 1. 이렇게 쓰는건 별로 안좋음 */}
        <button
          onClick={() => {
            console.log('test-1');
            console.log('test-2');
            console.log('test-3');
            console.log('여러줄일경우 반드시 블럭으로 처리한다');
          }}
        >
          확인1
        </button>
        {/* 2. 이걸 더 추천 */}
        <button onClick={() => console.log('test')}>확인2</button>
      </p>
    </div>
  );
};

export default Test5;
